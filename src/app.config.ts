import * as process from "process";

export const appConfig = () => ({
  NODE_ENV: process.env.NODE_ENV,
  APP_PORT: parseInt(process.env.APP_PORT, 10) || 3000,
  APP_HASH_ROUND: parseInt(process.env.APP_HASH_ROUND, 10) || 10,
  APP_NAME:process.env.APP_NAME,
  APP_CONTACT_NAME:process.env.APP_CONTACT_NAME,
  APP_CONTACT_URL:process.env.APP_CONTACT_URL,
  APP_CONTACT_EMAIL:process.env.APP_CONTACT_EMAIL,
  APP_VERSION:process.env.APP_VERSION,
  OPENAPI_PATH:process.env.OPENAPI_PATH,
  JWT_SECRET:process.env.JWT_SECRET
});
