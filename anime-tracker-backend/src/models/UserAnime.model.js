import mongoose from "mongoose";

const UserAnimeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    animeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Anime",
      required: true,
    },
    status: {
      type: String,
      enum: ["plan-to-watch", "watching", "completed"],
      default: "plan-to-watch",
    },
    rating: { type: Number, min: 1, max: 10 },
  },
  { timestamps: true }
);

export default mongoose.model("UserAnime", UserAnimeSchema);
