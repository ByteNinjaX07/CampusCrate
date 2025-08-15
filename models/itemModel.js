import { model, Schema } from "mongoose";

  const {
    Schema,
    model
  } = require("mongoose");

  const itemSchema = new Schema({

    claimQuestion: {type:String},

    type: { type: String, enum: ["lost", "found"], required: true } ,
    
    title: {
      type: String,
      required: false,
    },

    category: {
      type:String,
      required:true
    },

    description: {
      type:String,
      required:true
    },

    dateLost: {
      type: Date,
      default: Date.now,
      required: true
    },

    image: {
      type: File,
      required: false
    },

  });

module.exports = mongoose.model("Item", itemSchema);