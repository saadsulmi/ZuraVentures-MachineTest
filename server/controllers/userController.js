const { createToken, verifyToken } = require("../middlewares/jwt");
const userModel = require("../models/userModel");

const createUser=async (req, res) => {
  try {
    const { email, username } = req.body;
    const isExist = await userModel.findOne({ email });
    if (!isExist) {
      let newUser = new userModel({
        username,
        email,
      });
      await newUser.save();
      const token = await createToken({id:newUser.id,name:newUser.username})
      console.log(token);
      res.status(201).json({ message: "user created successfully",token});
    } else {
      const token = await createToken({id:isExist.id,name:isExist.username})
      console.log(token);
      res.status(200).json({ message: "user already exists",token});
    }
  } catch (error) {
    console.log(error);
  }
}


const updateUser = async (req, res) => {
  try {
    const { newUsername } = req.body;
    const token = req.header('auth-token')
    // used email to find the user just because in our case email is unique
    let userDetails = await userModel.findOne({ email });
    userDetails.username = newUsername;
    await userDetails.save();
    res
      .status(202)
      .json({ message: "username updated successfully", userDetails });
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
    createUser,
    updateUser
}