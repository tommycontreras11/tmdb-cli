# 🎬 TMDB CLI

**Project URL:** https://roadmap.sh/projects/tmdb-cli

A command-line application built with **Node.js** and **JavaScript** that interacts with **The Movie Database (TMDB) API** to fetch and display movie information directly in the terminal.

The CLI allows users to browse **Now Playing**, **Popular**, **Top Rated**, and **Upcoming** movies while demonstrating API integration, command-line argument parsing, environment variable management, and error handling.

---

# 🚀 Features

## Movie Categories

- Now Playing movies
- Popular movies
- Top Rated movies
- Upcoming movies

## CLI Commands

- Parse command-line arguments
- Validate user input
- Display formatted movie information
- Gracefully handle invalid commands and API errors

## API Integration

- Fetch data from the TMDB API
- Bearer Token authentication
- HTTP response validation
- Centralized error handling

---

# 🛠 Technologies Used

- Node.js
- JavaScript (ES Modules)
- TMDB API
- dotenv

---

# 🏗 Architecture

The project separates responsibilities into small, reusable functions.

```text
               User Input
                    │
                    ▼
              Command Parser
                    │
                    ▼
          Endpoint Validation
                    │
                    ▼
            TMDB API Request
                    │
                    ▼
         Response Validation
                    │
                    ▼
          Movie Formatter
                    │
                    ▼
              Terminal Output
```

## Component Responsibilities

| Component | Responsibility |
|-----------|----------------|
| `index.js` | Reads user input and orchestrates the application |
| `getMovieEndpoint()` | Validates CLI arguments and maps movie types to TMDB endpoints |
| `fetchMovies()` | Retrieves movies from the TMDB API |
| `validateResponse()` | Validates API responses |
| `displayMovies()` | Formats and displays movie information |

---

# 📂 Project Structure

```text
tmdb-cli/
│
├── config/
│   └── index.js
│
├── helper.js
├── index.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
TMDB_API_URL=https://api.themoviedb.org
TMDB_API_KEY=your_api_read_access_token
```

## Getting a TMDB API Token

1. Create an account at **https://www.themoviedb.org**
2. Go to your account settings.
3. Navigate to **API**.
4. Request API access if you haven't already.
5. Copy the **API Read Access Token**.
6. Paste it into your `.env` file.

---

# ▶ Local Development

## Clone the repository

```bash
git clone https://github.com/tommycontreras11/tmdb-cli.git
```

## Install dependencies

```bash
npm install
```

## Create the environment file

```bash
cp .env.example .env
```

Then add your TMDB Read Access Token.

## Start the application

```bash
npm run dev
```

---

# 💻 Usage

The application runs interactively from the terminal.

## Now Playing

```text
tmdb-app --type playing
```

or

```text
tmdb-app --type "playing"
```

---

## Popular

```text
tmdb-app --type popular
```

---

## Top Rated

```text
tmdb-app --type top
```

---

## Upcoming

```text
tmdb-app --type upcoming
```

---

## Exit the application

```text
exit
```

---

# 📺 Example Output

```text
----------------------------------------
🎬 Superman

⭐ 7.8/10 (1,245 votes)
📅 2025-07-11

Superman embarks on a journey to reconcile his Kryptonian
heritage with his human upbringing while protecting Earth.

----------------------------------------
🎬 F1

⭐ 8.1/10 (2,340 votes)
📅 2025-06-27

A retired Formula One driver returns to the sport to mentor
a promising young racer.
```

---

# ❌ Error Handling

The CLI validates both user input and TMDB API responses.

Examples include:

- Missing `--type` argument
- Missing movie type
- Invalid movie type
- Invalid API token
- Network failures
- TMDB API errors

Example:

```text
Invalid movie type. Choose one of: playing, popular, top, upcoming
```

---

# 💡 Future Improvements

Possible enhancements include:

- Movie search
- Pagination
- Display genres instead of genre IDs
- Colored terminal output
- Loading spinner while fetching data
- Sorting options
- Interactive menu
- Unit tests
- GitHub Actions CI

---

# 👨‍💻 Author

**Tommy Contreras**

GitHub: https://github.com/tommycontreras11

---

# 📄 License

This project is licensed under the **MIT License**.
