import express from "express";

export const server = () => {
  const httpServer = express();

  try {
    httpServer.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (error) {
    throw new Error(`Failed to start server: ${error.message}`);
  }
};
