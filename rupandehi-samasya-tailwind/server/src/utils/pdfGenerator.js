const PDFDocument = require("pdfkit");
const dayjs = require("dayjs");

function generateIssuePdf(issue, reporter, reports) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 40 });
    const chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", (err) => reject(err));

    doc
      .fontSize(18)
      .text("Rupandehi Samasya Portal", { align: "center" })
      .moveDown(0.5);

    doc
      .fontSize(12)
      .text("Government of Nepal, Lumbini Province", { align: "center" })
      .moveDown(1);

    doc.fontSize(13).text(`Issue ID: ${issue._id}`);
    doc.text(`Category: ${issue.category}`);
    doc.text(`Status: ${issue.status}`);
    doc.text(`Priority Score: ${issue.priorityScore || 0}`);
    doc.text(
      `Reported At: ${dayjs(issue.createdAt).format("YYYY-MM-DD HH:mm")}`
    );
    if (issue.resolvedAt) {
      doc.text(
        `Resolved At: ${dayjs(issue.resolvedAt).format(
          "YYYY-MM-DD HH:mm"
        )}`
      );
    }
    doc.moveDown();

    doc.text(`Location: ${issue.locationName}`);
    doc.moveDown();

    if (reporter && !issue.isAnonymous) {
      doc.text(`Reporter: ${reporter.name} (${reporter.email || "N/A"})`);
    } else {
      doc.text("Reporter: Anonymous (identity protected)");
    }
    doc.moveDown();

    doc.fontSize(13).text("Citizen Description:", { underline: true });
    doc.fontSize(12).text(issue.description).moveDown(1);

    if (reports) {
      if (reports.nepaliReport) {
        doc.fontSize(13).text("AI रिपोर्ट (नेपाली):", { underline: true });
        doc.fontSize(12).text(reports.nepaliReport).moveDown(1);
      }
      if (reports.englishReport) {
        doc.fontSize(13).text("AI Report (English):", { underline: true });
        doc.fontSize(12).text(reports.englishReport).moveDown(1);
      }
    }

    if (issue.resolutionNotes) {
      doc.fontSize(13).text("Resolution Notes:", { underline: true });
      doc.fontSize(12).text(issue.resolutionNotes).moveDown(1);
    }

    doc
      .fontSize(10)
      .text(
        "This PDF is generated automatically using Rupandehi Samasya Portal. " +
          "AI-generated summaries are advisory and should be verified for formal decisions.",
        { align: "left" }
      );

    doc.end();
  });
}

module.exports = { generateIssuePdf };
