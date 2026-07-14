import { config } from "./config/index.js";
import { getMovieEndpoint, fetchMovies, displayMovies } from "./helper.js";

config.validateEnvVariables();

process.stdin.on("data", async (data) => {
  const input = data.toString().trim().split(" ");

  const command = input[0];
  const arg = input.slice(1);

  switch (command) {
    case "tmdb-app":
      try {
        const endpoint = getMovieEndpoint(arg);

        const movies = await fetchMovies(endpoint);
        displayMovies(movies.results)
      } catch (error) {
        console.error(error.message);
      }
      break;
    case "exit":
      process.exit();
    default:
      console.log("Command not valid.");
  }
});
