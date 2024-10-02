import express from "express";
import path from "path";

import { fileURLToPath } from "url";
import WinnersController from "../controllers/winners.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", WinnersController.getWinners);

router.get("/:winnerId", (req, res) => {
  res
    .status(200)
    .sendFile(
      path.resolve("/Users/maxlopez/repos/listicle/client/public/winner.html")
    );
});

export default router;
