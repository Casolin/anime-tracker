import mongoose from "mongoose";

const AnimeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    episodes: { type: Number, default: 0 },
    genre: { type: [String], default: ["N/A"] },
    description: { type: String, default: "N/A" },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Anime", AnimeSchema);
