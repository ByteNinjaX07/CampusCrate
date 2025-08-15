import Item from '../models/itemModel.js';

export const getLost = async (req, res) => {
  try {
    const items = await Item.find({ type: "lost" }); // Filter by type
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching lost items");
  }
}