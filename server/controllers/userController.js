const { createToken, verifyToken } = require("../middlewares/jwt");
const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { email, username } = req.body;
    const isExist = await userModel.findOne({ email });
    if (!isExist) {
      let newUser = new userModel({
        username,
        email,
      });
      await newUser.save();
      const token = await createToken({
        id: newUser.id,
        name: newUser.username,
      });
      res.status(201).json({ message: "user created successfully", token });
    } else {
      const token = await createToken({
        id: isExist.id,
        name: isExist.username,
      });
      res.status(200).json({ message: "user already exists", token });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    // used email to find the user just because in our case email is unique
    let userDetails = await userModel.findOne({ email });
    userDetails.username = username;
    await userDetails.save();
    res
      .status(202)
      .json({ message: "username updated successfully", userDetails });
  } catch (error) {
    console.log(error);
  }
};

const getUserDetails = async (req, res) => {
  try {
    const token = req.header("auth-token");
    const response = await verifyToken(token);
    const userData = await userModel.findOne({ _id: response.id });
    res.status(202).json({userData})

  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createUser,
  updateUser,
  getUserDetails,
};
