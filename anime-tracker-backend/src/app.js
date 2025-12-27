import express from "express";
import cors from "cors";
import userRouter from "./routes/auth.routes.js";
import animeRouter from "./routes/anime.routes.js";
import userAnimeRouter from "./routes/userAnime.routes.js";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Users");
});

app.use("/", userRouter);
app.use("/", animeRouter);
app.use("/", userAnimeRouter);
