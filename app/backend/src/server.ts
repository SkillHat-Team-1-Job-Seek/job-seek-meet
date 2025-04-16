import express, { Express } from "express";

const app: Express = express();

app.listen(8000, () => {
  console.log("Server listening at port 8000");
});
