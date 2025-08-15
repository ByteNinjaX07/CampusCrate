import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  claimQuestion: { type: String },
  type: { type: String, enum: ["lost", "found"], required: true },
  title: {
    type: String,
    required: true, // Changed to required
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateLost: {
    type: Date,
    default: Date.now,
    required: true
  },
  image: {
    type: String, // Changed from File to String (for URL/path)
    required: false
  },
});

export default model("Item", itemSchema);