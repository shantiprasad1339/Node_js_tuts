const { shortUrlModel } = require("../models/shorturlmodel");
const shortid = require("shortid");






 const createUrl = async (req, res) => {
  const redirecturl = req.body.redirecturl
  const userid = req.body.userid
  let existingEntry = await shortUrlModel.findOne({ redirecturl });

  if (existingEntry) {
    return res.status(200).send({ msg: "Redirect URL already exists", data: existingEntry });
  }

  const shortidurl = shortid.generate()
  const result = await shortUrlModel.create({
    userid:userid,
    shortid: shortidurl,
    redirecturl: redirecturl,
  });

  res.send({"msg":result});
}



const getAllUrl= async(req,res)=>{
    const allUrls = await shortUrlModel.find({}).populate("userid")
    
    res.send({"data":allUrls})
}
const getUrlById = async(req,res)=>{
    const bodyId = req.params.id
    const filtereduser = await shortUrlModel.findOne( {shortid: bodyId})
    if(!filtereduser){
        res.send({"status":404,"msg":"invalidid"})
    }else{

        res.redirect(filtereduser.redirecturl)
    }
    
}
const deleteUrlBy =  async (req, res) => {
    try {
      const { shortid } = req.params; 
  
     
      const deletedUrl = await shortUrlModel.findOneAndDelete({ shortid });
  
      if (!deletedUrl) {
        return res.status(404).send({ message: "Short URL not found" });
      }
  
      res.status(200).send({ message: "Short URL deleted successfully", data: deletedUrl });
    } catch (error) {
      console.error("Error deleting short URL:", error);
      res.status(500).send({ error: "An error occurred while deleting the short URL" });
    }
  }
 const getUrlByShortId = async(req,res)=>{
try {
  const userid = req.params.shortid
  const filteredUrl = await shortUrlModel.findOne({shortid : userid}).populate("userid")
  if(!filteredUrl){
    res.send({"Status":404,"Msg":"data not get found"})
  }
  res.send({"Status":200,"Msg":"data get suceesfully","data":filteredUrl})
} catch (error) {
  res.send(error)
  
}

   
  }
module.exports ={createUrl,getAllUrl,getUrlById,deleteUrlBy,getUrlByShortId};
