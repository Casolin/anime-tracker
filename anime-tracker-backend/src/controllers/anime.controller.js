import Anime from "../models/Anime.model.js";

export const addNewAnime = async (req, res) => {
  try {
    const { title, image, episodes, genre, description } = req.body;
    const newAnime = new Anime({
      title,
      image,
      episodes,
      genre,
      description,
      userId: req.user.id,
    });
    await newAnime.save();
    res.status(201).json({ message: "Anime added successfuly", newAnime });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAnime = async (req, res) => {
  try {
    const id = req.params.id;

    const anime = await Anime.findById(id);
    if (!anime) return res.status(404).json({ message: "Anime not found" });

    if (anime.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not allowed to delete this anime" });
    }

    await Anime.findByIdAndDelete(id);

    res.status(200).json({ message: "Anime deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editAnime = async (req, res) => {
  try {
    const { title, image, episodes, genre, description } = req.body;
    const id = req.params.id;

    const anime = await Anime.findById(id);
    if (!anime) return res.status(404).json({ message: "Anime not found" });

    if (anime.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not allowed to edit this anime" });
    }

    const updatedAnime = { title, image, episodes, genre, description };

    const updatedAnimeDoc = await Anime.findByIdAndUpdate(id, updatedAnime, {
      new: true,
    });

    res
      .status(200)
      .json({ message: "Anime updated successfully", updatedAnimeDoc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listAllAnimes = async (req, res) => {
  try {
    const animes = await Anime.find();
    res.status(200).json(animes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
