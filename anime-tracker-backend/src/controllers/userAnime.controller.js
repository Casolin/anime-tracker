import UserAnime from "../models/UserAnime.model.js";

export const addAnimeToUser = async (req, res) => {
  try {
    const { animeId, status, rating } = req.body;

    const existing = await UserAnime.findOne({
      userId: req.user.id,
      animeId,
    });

    if (existing)
      return res.status(400).json({ message: "Anime already in your list" });

    const newUserAnime = new UserAnime({
      userId: req.user.id,
      animeId,
      status,
      rating,
    });

    await newUserAnime.save();
    res.status(201).json({ message: "Anime added to your list", newUserAnime });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserAnime = async (req, res) => {
  try {
    const { status, rating } = req.body;
    const id = req.params.id;

    const userAnime = await UserAnime.findById(id);
    if (!userAnime) return res.status(404).json({ message: "Not found" });

    if (userAnime.userId.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    if (status) userAnime.status = status;
    if (rating) userAnime.rating = rating;

    await userAnime.save();
    res.status(200).json({ message: "Updated successfully", userAnime });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeUserAnime = async (req, res) => {
  try {
    const id = req.params.id;

    const userAnime = await UserAnime.findById(id);
    if (!userAnime) return res.status(404).json({ message: "Not found" });

    if (userAnime.userId.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await UserAnime.findByIdAndDelete(id);
    res.status(200).json({ message: "Removed from your list" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserAnimeList = async (req, res) => {
  try {
    const list = await UserAnime.find({ userId: req.user.id }).populate(
      "animeId"
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
