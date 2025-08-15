import { Schema, model } from "mongoose";

const itemModel=require('../models/itemModel.js')

const getFound = async (req, res) => {
    try {
    const items = await itemModel.find();
    res.json(items)
  } catch (error) {
    res.status(500).send("Error fetching found items");
  }
}

module.exports = { getFound };