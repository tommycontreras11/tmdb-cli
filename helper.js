import { config } from "./config/index.js";

const API_RESOURCE_PATH = "3/movie";

const movieTypeToEndpoint = new Map([
  ["playing", "now_playing"],
  ["popular", "popular"],
  ["top", "top_rated"],
  ["upcoming", "upcoming"],
]);

const validateResponse = (response, data) => {
  if (!response.ok) {
    throw new Error(data.status_message);
  }

  if (data.success === false) {
    throw new Error(data.status_message);
  }
};

export const getMovieEndpoint = (arg) => {
  const typeProperty = arg[0];
  if (typeProperty != "--type") {
    throw new Error("You must specify the type property, like this --type");
  }

  const typeValue = arg[1]?.replaceAll('"', "");
  if (!typeValue) {
    throw new Error(
      "You must specify a type of movie, like this --type (playing, popular, top or upcoming)",
    );
  }

  const endpoint = movieTypeToEndpoint.get(typeValue);

  if (!endpoint) {
    throw new Error(
      `Invalid movie type. Choose one of: ${[...movieTypeToEndpoint.keys()].join(", ")}`,
    );
  }
  return endpoint;
};

export const fetchMovies = async (endpoint) => {
  const response = await fetch(
    `${config.TMDB_API_URL}/${API_RESOURCE_PATH}/${endpoint}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${config.TMDB_API_KEY}`,
      },
    },
  );

  const data = await response.json();

  validateResponse(response, data);
  return data;
};
