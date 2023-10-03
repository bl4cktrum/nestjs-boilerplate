import * as process from "process";

export const appConfig = () => ({
  NODE_ENV: process.env.NODE_ENV,
  APP_PORT: parseInt(process.env.APP_PORT, 10) || 3000,
});
