import express, { json } from "express";
import config from "./config.js";

export const server = () => {
  const httpServer = express();

  const port = config.port;
  console.log(`Port from .env file: ${process.env.PORT}`);

  // Test route for port config

  httpServer.get("/ping", (req, res) => {
    console.log(` ℹ️- ping route : ${req.url} ${Date.now()}`);
    res.status(200).json({ message: "🎯pong - The test is successful" });
  });

  try {
    console.log("Testing Docker Image in local");

    httpServer.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    throw new Error(`Failed to start server: ${error.message}`);
  }
};
