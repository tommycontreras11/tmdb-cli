import { config } from "./config/index.js"
import { fetchMoviesCurrentlyPlaying, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from "./helper.js"

config.validateEnvVariables()

process.stdin.on("data", (data) => {
    const input = data.toString().trim().split(" ")

    const command = input[0]
    const arg = input.slice(1)

    switch(command) {
        case "tmdb-app":
            const typeProperty = arg[0]
            if(typeProperty != "--type") {
                console.log("You must specify a type of movie, like this --type (playing, popular, top or upcoming)")
                return
            }
            
            const typeValue = arg[1].replaceAll('"', "")

            const movieHandlers = {
              playing: fetchMoviesCurrentlyPlaying,
              popular: fetchPopularMovies,
              top: fetchTopRatedMovies,
              upcoming: fetchUpcomingMovies,
            };

            const handler = movieHandlers[typeValue]

            if (!handler) {
              console.error("Invalid movie type.");
            } else {
              handler();
            }

            break
        case "exit":
            process.exit()
        default:
            console.log("Command not valid.")
    }
})