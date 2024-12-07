import express from "express";
import connection from "./connection";

const app = express();

app.listen(4004, () => {
  console.log("Server is RUNNING");
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM posts", (err, results) => {
    res.json(results);
  });
});
