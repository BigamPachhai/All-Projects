    const OpenAI = require("openai");

    let client = null;
    if (process.env.OPENAI_API_KEY) {
      client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }

    const model = process.env.OPENAI_MODEL_ID || "gpt-4o-mini";

    async function autoDescribeFromImage(buffer) {
      if (!client) return null;
      try {
        const base64 = buffer.toString("base64");
        const response = await client.chat.completions.create({
          model,
          messages: [
            {
              role: "system",
              content:
                "You are an assistant helping a local government office in Rupandehi, Nepal. " +
                "Given a photo of a local civic problem, respond with JSON: " +
                "{ category, descriptionEnglish, descriptionNepali, priorityScore, confidence }. " +
                "Categories must be one of: waste, water, electrical, road, other."
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Analyze this image and identify the civic issue."
                },
                {
                  type: "image_url",
                  image_url: {
                    url: `data:image/jpeg;base64,${base64}`
                  }
                }
              ]
            }
          ],
          response_format: { type: "json_object" }
        });
        const content = response.choices[0].message.content || "{}";
        return JSON.parse(content);
      } catch (err) {
        console.error("autoDescribeFromImage error:", err.message);
        return null;
      }
    }

    async function classifyCommentSentiment(text) {
      if (!client) {
        const lower = text.toLowerCase();
        if (lower.includes("धन्यवाद") || lower.includes("good")) return "positive";
        if (lower.includes("नालायक") || lower.includes("worst")) return "negative";
        return "neutral";
      }
      try {
        const response = await client.responses.create({
          model,
          input:
            'Classify this citizen comment about local government as "positive", "negative", "neutral", or "toxic". ' +
            "Return just one word.

Comment: " +
            JSON.stringify(text)
        });
        const label = (response.output[0].content[0].text || "")
          .trim()
          .toLowerCase();
        if (["positive", "negative", "neutral", "toxic"].includes(label)) {
          return label;
        }
        return "neutral";
      } catch (err) {
        console.error("classifyCommentSentiment error:", err.message);
        return "neutral";
      }
    }

    async function detectDuplicateIssue(newIssue, candidates) {
      if (!client || !candidates.length) return null;
      try {
        const input =
          "New issue:\n" +
          `Title: ${newIssue.title}\n` +
          `Description: ${newIssue.description}\n` +
          `Location: ${newIssue.locationName}\n\n` +
          "Existing issues:\n" +
          candidates
            .map(
              (c, i) =>
                `${i + 1}. [${c._id}] ${c.title} (${c.locationName}) - ${c.description}`
            )
            .join("\n") +
          "\n\nDecide if the new issue is a clear duplicate of one existing issue. " +
          "Return JSON { isDuplicate: boolean, duplicateIndex: number | null, explanation: string }. " +
          "duplicateIndex should be 1-based index into the existing list.";

        const response = await client.responses.create({
          model,
          input,
          response_format: { type: "json_object" }
        });
        const data = JSON.parse(response.output[0].content[0].text || "{}");
        return data;
      } catch (err) {
        console.error("detectDuplicateIssue error:", err.message);
        return null;
      }
    }

    async function generateIssueReportText(issue) {
      if (!client) return null;
      try {
        const input = `Generate a formal short report in English and Nepali for a government file.
Issue:
Title: ${issue.title}
Description: ${issue.description}
Category: ${issue.category}
Location: ${issue.locationName}
Priority score: ${issue.priorityScore}
Status: ${issue.status}

Return JSON { englishReport: string, nepaliReport: string }.`;
        const response = await client.responses.create({
          model,
          input,
          response_format: { type: "json_object" }
        });
        const data = JSON.parse(response.output[0].content[0].text || "{}");
        return data;
      } catch (err) {
        console.error("generateIssueReportText error:", err.message);
        return null;
      }
    }

    async function generateShareCaption(issue, userName) {
      if (!client) return null;
      try {
        const input = `Write a short 180-character caption mixing Nepali and English, celebrating that a citizen's local issue was solved in Rupandehi.
Issue: ${issue.title} at ${issue.locationName}.
Citizen: ${userName}.
Return just the caption string.`;
        const response = await client.responses.create({
          model,
          input
        });
        return (response.output[0].content[0].text || "").trim();
      } catch (err) {
        console.error("generateShareCaption error:", err.message);
        return null;
      }
    }

    module.exports = {
      autoDescribeFromImage,
      classifyCommentSentiment,
      detectDuplicateIssue,
      generateIssueReportText,
      generateShareCaption
    };
