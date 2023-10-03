import * as process from "process";

export const appConfig = () => ({
  NODE_ENV: process.env.NODE_ENV,
  DB_DATABASE: process.env.DB_DATABASE,
  port: parseInt(process.env.PORT, 10) || 3000,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  }
});
