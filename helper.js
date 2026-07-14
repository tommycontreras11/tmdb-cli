import { config } from "./config/index.js";

const validateResponse = (response, data) => {
  if (!response.ok) {
    throw new Error(data.status_message);
  }

  if (data.success === false) {
    throw new Error(data.status_message);
  }
};

const API_RESOURCE_PATH = "3/movie";

export const fetchMoviesBasedOnType = async (type) => {
  try {
    const response = await fetch(
      `${config.TMDB_API_URL}/${API_RESOURCE_PATH}/${type}?language=en-US&page=1`,
      {
        headers: {
          "Content-type": "Application/json",
          Authorization: `Bearer ${config.TMDB_API_KEY}`,
        },
      },
    );

    const data = await response.json();

    validateResponse(response, data);

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};