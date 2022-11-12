import { config } from "dotenv";
import { createServer } from "./server";
config();

const { PORT = "8000" } = process.env;

const server = createServer();

server.listen(Number(PORT), () => {
  console.log(`Server listening at ${PORT}`);
});
