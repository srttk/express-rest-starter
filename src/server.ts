import express from "express";
import routes from "./routes";

export function createServer() {
  const app = express();

  //TODO: You cand add additional middilewares or pluging here, Eg: CORS, Session

  //   Register routes
  app.use(routes);

  return app;
}
