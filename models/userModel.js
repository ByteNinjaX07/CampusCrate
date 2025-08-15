import { model, Schema } from "mongoose";

const {
    Schema,
    model
  } = require("mongoose");
  
  const MySchema = new Schema({
    id: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true

    },
    role: {
      type: String,
      values: ['user', 'admin'],
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  });

  const userModel = model("user", MySchema)

module.exports = userModel;