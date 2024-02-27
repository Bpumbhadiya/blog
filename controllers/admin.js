const ADMIN = require('../model/admin');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.SECURE = async function (req, res, next) {
  try {
    //    console.log("mIDDLEWARE");
    console.log(req.headers.token);
    let token = req.headers.token;
    if (!token) {
      throw new Error("Please attached token")
    }
    var decoded = jwt.verify(token, 'LOGIN');
    console.log(decoded.id);
    const checkUser = await ADMIN.findById(decoded.id)
    if (!checkUser) {
      throw new Error("User not found")
    }
    next()
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error.message
    })
  }
}

exports.SIGNUP = async function (req, res, next) {
  try {
    if (!req.body.firstname || !req.body.lastname || !req.body.email ||
      !req.body.password) {
      throw new Error("Please enter valid fields")
    }
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const data = await ADMIN.create(req.body)
    res.status(200).json({
      status: "Success",
      message: "Create new user",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.LOGIN = async function (req, res, next) {

  try {
    const checkUser = await ADMIN.findOne({ email: req.body.email })
    if (!checkUser) {
      throw new Error("Please enter valid fields")
    }

    const checkPass = await bcrypt.compare(req.body.password, checkUser.password)
    if (!checkPass) {
      throw new Error("Please enter valid fields")
    }
    var token = jwt.sign({ id: checkUser._id }, 'LOGIN');
    res.status(200).json({
      status: "Success",
      message: "Users found",
      token
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }

}

exports.alldata = async function (req, res, next) {
  try {
    const data = await ADMIN.find()
    res.status(200).json({
      status: 'Success',
      message: "data found",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}
