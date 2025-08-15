import { Schema, model } from "mongoose";

const postlost= async(req, res) => {
  try {
    const { title, category, description, dateLost } = req.body;
    const newItem = new Item({
      title,
      category,
      description,
      dateLost,
    });
    await newItem.save(); // Save to DB
    res.status(201).json({ message: 'Item posted successfully!' });
  }
  catch (error) {
    res.status(500).json({ error: 'Error posting item' });
  }
}

module.exports = {postlost};