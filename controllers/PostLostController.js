import Item from '../models/itemModel.js';

export const postlost = async (req, res) => {
  try {
    const { title, category, description, dateLost } = req.body;
    const newItem = new Item({
      type: "lost", // Added type field
      title,
      category,
      description,
      dateLost,
    });
    await newItem.save();
    res.status(201).json({ message: 'Item posted successfully!' });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error posting item' });
  }
}