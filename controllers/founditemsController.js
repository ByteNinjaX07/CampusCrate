import Item from '../models/itemModel.js';

export const getFound = async (req, res) => {
  try {
    const items = await Item.find({ type: "found" }); // Filter by type
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching found items");
  }
}