import Item from '../models/itemModel.js'; // Import the model

export const postfound = async (req, res) => {
  try {
    const { title, category, description, dateLost, image } = req.body; // Fixed casing
    const newItem = new Item({
      type: "found", // Added type field
      title,
      category,
      description,
      dateLost,
      image: image ? image : null 
    });
    await newItem.save();
    res.status(201).json({ message: 'Item posted successfully!' });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error posting item' });
  }
}