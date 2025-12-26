import express from "express";
import {
  listAllAnimes,
  addNewAnime,
  editAnime,
  deleteAnime,
} from "../controllers/anime.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const animeRouter = express.Router();

animeRouter.get("/animes", authMiddleware, listAllAnimes);
animeRouter.post("/animes/add", authMiddleware, addNewAnime);
animeRouter.put("/animes/edit/:id", authMiddleware, editAnime);
animeRouter.delete("/animes/delete/:id", authMiddleware, deleteAnime);

export default animeRouter;
