import express from "express";
import path from "path";

import { fileURLToPath } from "url";
import winnerData from "../data/winners.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(winnerData);
});

router.get("/:winnerId", (req, res) => {
  res
    .status(200)
    .sendFile(
      path.resolve("/Users/maxlopez/repos/listicle/client/public/winner.html")
    );
});

export default router;
