import express from "express";

export const server = () => {
  const httpServer = express();

  const port = process.env.PORT || 3000;
  console.log(`Port from .env file: ${process.env.PORT}`);

  try {
    httpServer.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    throw new Error(`Failed to start server: ${error.message}`);
  }
};
