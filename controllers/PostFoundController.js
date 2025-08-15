import { Schema, model } from "mongoose";

const postfound= async(req, res) => {
  try {
    const { Title, Category, Description, DateLost, Image } = req.body;
    const newItem = new Item({
      Title,
      Category,
      Description,
      DateLost,
      Image: Image ? Image : null 
    });
    await newItem.save(); // Save to DB
    res.status(201).json({ message: 'Item posted successfully!' });
  }
  catch (error) {
    res.status(500).json({ error: 'Error posting item' });
  }
}

module.exports={postfound}
