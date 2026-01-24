import axios from "axios";

export const fetchFromTMDB = async (url) => {
  // Append your API key directly to the URL
  const fullUrl = `${url}&api_key=df9d77fff40c5dbd94cde679fe74090a`;

  try {
    const response = await axios.get(fullUrl, {
      headers: {
        accept: "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch data from TMDB: " + response.statusText);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching from TMDB:", error.message);
    throw error;
  }
};
