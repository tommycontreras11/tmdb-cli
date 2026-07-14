process.stdin.on("data", (data) => {
    const input = data.toString().trim().split(" ")

    const command = input[0]

    switch(command) {
        case "tmdb-app":
            console.log("TMDB APP")

            break
        case "exit":
            process.exit()
        default:
            console.log("Command not valid.")
    }
})