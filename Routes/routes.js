const express = require("express");
const router = express.Router();
const message = require("../models/message");
const nodemailer = require("nodemailer");
const sendEmail = require("./email.js");
router.get("/", async (req, res) => {
  try {
    const data = await message.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post("/post", async (req, res) => {
  const register = req.body;
  const validNumber = /^\d{10}$/;
  if (!register.number.match(validNumber)) {
    res.status(203).json({ message: "enter valid phone number" });
    return;
  }
  const newRegister = new message(register);
  try {
    await newRegister.save();
    sendEmail(register);
    res.status(201);
    res.send({ msg: "Successfull" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
module.exports = router;
