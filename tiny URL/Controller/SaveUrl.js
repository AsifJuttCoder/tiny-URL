import mongoose from "mongoose";
import { URLs } from "../Models/url.js";
export const SaveURL = async (req, res) => {
  const { longUrl } = req.body;
  try {
    const newURL = new URLs({ longUrl: longUrl });
    const savedRef = await newURL.save();
    const shortURLId = savedRef._id;
    const shortURL = `https://tinyurl.com/2bmm74ty/url/${shortURLId}`;
    res.status(200).json({
      ok: true,
      shortURL: shortURL,
    });
  } catch (err) {z
    console.log(err);
    res.status(500).json({
      ok: false,
    });
  }
};
