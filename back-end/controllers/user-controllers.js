const MyError = require("../models/MyError");
const User = require("../models/user-schema");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const { email, password, userName } = req.body;
  try {
    let checkUser = await User.findOne({ email: email });

    if (checkUser) {
      let err = new MyError("Email Exist");
      return next(err);
    }
    const hashPassword = await bcrypt.hash(password, 12);
    let user = new User({
      email: email,
      password: hashPassword,
      userName: userName,
      type: "user",
    });
    await user.save();

    let token = jwt.sign({ id: user._id, email: email }, "my-secret", {
      expiresIn: "1d",
    });
    res.status(201);
    res.cookie("Auth_Cookie", token);

    // res.setHeader("Set-Cookie", token);
    return res.json({ status: "ok", msg: "Success", user: user });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let checkUser = await User.findOne({ email: email });

    if (!checkUser) {
      let err = new MyError("User Was Not Found");
      return next(err);
    }
    let passwordCheck = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (!passwordCheck) {
      const err = new MyError("Wrong Details", 500);
      return next(err);
    }

    let token = jwt.sign({ id: checkUser._id, email: email }, "my-secret", {
      expiresIn: "1d",
    });
    res.status(201);
    res.cookie("Auth_Cookie", token);
    // res.setHeader("Set-Cookie", token);
    return res.json({ status: "ok", user: checkUser, msg: "Success" });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const updateUser = async (req, res, next) => {
  console.log("updateUser", req.user);
  try {
    const image = req.file;
    const { email, password, userName } = req.body;
    console.log(email, password, userName);
    const userFromDb = await User.findById(req.user.id);
    if (!userFromDb) {
      let err = new MyError("User No Found", 500);
      return next(err);
    }
    if (email) {
      userFromDb.email = email;
    }
    if (password) {
      const hashPassword = await bcrypt.hash(password, 12);
      userFromDb.password = hashPassword;
    }
    if (userName) {
      userFromDb.userName = userName;
    }
    if (image) {
      userFromDb.profileImage = image.path; // Assuming you're saving the image path
    }

    // Save the updated user to the database
    await userFromDb.save();
    console.log("userFromDb", userFromDb);
    return res.json({ status: "ok", userFromDb });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
module.exports = {
  signup,
  login,
  updateUser,
};
