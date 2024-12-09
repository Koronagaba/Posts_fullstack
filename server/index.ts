import express from "express";
import router from "./routes/Posts";

const app = express();
app.use(express.json())

app.listen(4004, () => {
  console.log("Server is RUNNING");
});

app.use("/posts", router);
