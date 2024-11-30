const express = require("express")
const {createUrl,getAllUrl,getUrlById,deleteUrlBy,getUrlByShortId} = require("../controllers/shorturlcontroller")
const shortUrlRouter = express.Router()
shortUrlRouter.post("/",createUrl)
shortUrlRouter.get("/",getAllUrl)
shortUrlRouter.get("/:id",getUrlById)
shortUrlRouter.get("/shortid/:shortid",getUrlByShortId)
shortUrlRouter.delete("/:id",deleteUrlBy)


module.exports=shortUrlRouter