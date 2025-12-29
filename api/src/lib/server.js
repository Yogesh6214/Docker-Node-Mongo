import express from "express";
import config  from "./config";
export const server = () => {
  const httpServer = express();

  const port = config.port;
  console.log(`Port from .env file: ${process.env.PORT}`);

  try {
    httpServer.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    throw new Error(`Failed to start server: ${error.message}`);
  }
};
