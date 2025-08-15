import { model, Schema } from "mongoose";

const {
    Schema,
    model
  } = require("mongoose");
  
  const MySchema = new Schema({
    itemId: {
      type: Number,
      required: true,
      unique: true
    },
    claimentId: {
        type:Number,
        required:true,
        unique: true
    },
    message: {
        type:String,
        required:true

    },
    status: {
      type: String,
      values: ['pending', 'approved', 'rejected'],
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  });

  const claimModel = model("claim", MySchema)

module.exports = claimModel;