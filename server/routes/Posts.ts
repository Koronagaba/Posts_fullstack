import connection from "../connection";
import express, { Request, Response } from "express";
const router = express.Router();

const postRouter = router.get("/", (req: Request, res: Response) => {
  connection.query("SELECT * FROM posts", (err, results) => {
    res.json(results);
  });
});

export default postRouter;
