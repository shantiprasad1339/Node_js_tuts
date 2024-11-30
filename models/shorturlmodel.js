const mongoose = require("mongoose");
const shortUrlSchema = new mongoose.Schema(
    {
      userid:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
  
      shortid: { type: String,unique:true },
      redirecturl: { type: String, required: true,unique:false },
    },
    { timestamps: true }
  );
  const shortUrlModel = mongoose.model("shortUrl", shortUrlSchema);
  module.exports = { shortUrlModel };
  