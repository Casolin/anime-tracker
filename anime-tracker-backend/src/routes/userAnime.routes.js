import express from "express";
import {
  addAnimeToUser,
  updateUserAnime,
  removeUserAnime,
  getUserAnimeList,
} from "../controllers/userAnime.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const userAnimeRouter = express.Router();

userAnimeRouter.post("/useranime/add", authMiddleware, addAnimeToUser);
userAnimeRouter.put("/useranime/edit/:id", authMiddleware, updateUserAnime);
userAnimeRouter.delete(
  "/useranime/delete/:id",
  authMiddleware,
  removeUserAnime
);
userAnimeRouter.get("/useranime", authMiddleware, getUserAnimeList);

export default userAnimeRouter;
