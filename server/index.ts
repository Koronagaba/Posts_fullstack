import express from "express";
import connection from "./connection";
import postRouter from "./routes/Posts";

const app = express();

app.listen(4004, () => {
  console.log("Server is RUNNING");
});

app.use("/posts", postRouter);
