import { config } from "./config/index.js"
import { fetchMoviesBasedOnType } from "./helper.js"

config.validateEnvVariables()

const movieType = new Map([
    ["playing", "now_playing"],
    ["popular", "popular"],
    ["top", "top_rated"],
    ["upcoming", "upcoming"]
])

process.stdin.on("data", async (data) => {
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

            const endpoint = movieType.get(typeValue);

            if (!endpoint) {
              console.error("Invalid movie type. Choose: playing, popular, top, or upcoming.");
              return;
            }
            
            await fetchMoviesBasedOnType(endpoint);

            break
        case "exit":
            process.exit()
        default:
            console.log("Command not valid.")
    }
})