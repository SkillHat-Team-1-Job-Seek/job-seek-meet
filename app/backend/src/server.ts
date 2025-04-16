import express, { Express } from "express";
import { PORT } from "./util/secret";

const app: Express = express();

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
