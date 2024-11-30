const express = require("express")
const {deleteUserById,getAllUser,getUserById,createUser,updateUserById} = require("../controllers/usercontroller")
const userRouter = express.Router()
userRouter.post("/",createUser)
userRouter.get("/",getAllUser)
userRouter.get("/:id",getUserById)
userRouter.put("/:userId",updateUserById)
userRouter.delete("/:userId",deleteUserById)


module.exports=userRouter