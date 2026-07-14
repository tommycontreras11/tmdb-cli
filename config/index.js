import dotenv from "dotenv";

dotenv.config({
  quiet: true,
});

const validateEnvVariables = () => {
  const envs = ["TMDB_API_URL", "TMDB_API_KEY"];

  envs.forEach((env) => {
    const name = process.env[env];
    if (!name) {
      console.log(`The env ${env} must have a value.`);
      process.exit();
    }
  });
};

export const config = {
  TMDB_API_URL: process.env.TMDB_API_URL,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
  validateEnvVariables: validateEnvVariables,
};
