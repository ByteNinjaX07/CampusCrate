const {
    Schema,
    model
  } = require("mongoose");
  
  const MySchema = new Schema({
    Title: {
      type: String,
      required: true,
      maxlength: 50
    },
    Category: {
        type:String,
        required:true
    },
    Description: {
        type:String,
        required:true

    },
    DateLost: {
      type: Date,
      default: Date.now,
      required: true
    },
  });

  const itemModel = model("item", MySchema)

module.exports = itemModel