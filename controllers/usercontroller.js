
const {User} = require("../models/userModel");

const getAllUser =  async (req, res) => {
  try {
    const alldata = await User.find();
    if(!alldata){res.send({status:204,"msg":"No User Found"})}
    res.send({ Status: 200, msg: "Data get sucessfully", data: alldata });
  } catch (error) {
    res.send({status:404,"error":error})
    console.log(error);
    
  }
 
}

const getUserById = async (req, res) => {
  const userId = req.params.id;

try {
  const filteredUsers = await User.findById(userId);
  if (!filteredUsers) {
    res.send({ status: 404, msg: "User not found" });
  }
  res.send({ status: 200, msg: "User get Successfully", data: filteredUsers });
} catch (error) {
  res.send({status:404,"error":error})
  console.log(error);
  
}
}

const createUser =  async (req, res) => {
  try {
    if (
      !req.body ||
      !req.body.first_name ||
      !req.body.last_name ||
      !req.body.email ||
      !req.body.gender
    ) {
      res.send({ Status: 400, msg: "please enter all fields" });
    }
  
    const result = await userData.create({
      firstname: req.body.first_name,
      lastname: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
    });
  
    return res.send({
      status: 201,
      msg: "USER CREATED SUCCESSFULLY",
      data: result,
    });
  } catch (error) {
    res.send({"status":404,"error":error})
  }
}

const updateUserById =  async (req, res) => {
  const userid = req.params.userId;
  const bodyData = req.body;

 try {
 const updatedUser =  await User.findByIdAndUpdate(userid, bodyData);
 if (!updatedUser) {
  res.send({ status: 404, msg: "User not found" });
}
  return res.send({
    status: 201,
    msg: "USER UPDATED SUCCESSFULLY",
    user:updatedUser
  });
 } catch (error) {
  res.send({status:404,"error":error})
console.log(error);

 }
}

const deleteUserById =  async (req, res) => {
  const userid = req.params.userId;
 try {
  const userexists = await User.findByIdAndDelete(userid);
  if(!userexists){
    res.send({ status: 404, msg: "User Not Found Please Enter Valid UserId" });
  }
  res.send({ status: 204, msg: "user deleted successfully" ,"User":userexists});
 } catch (error) {
  res.send({status:404,"error":error})
  console.log(error);
 }
}
module.exports = {deleteUserById,getAllUser,getUserById,createUser,updateUserById};
