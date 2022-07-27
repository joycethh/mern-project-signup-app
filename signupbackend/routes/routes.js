const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignupModels");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, saltPassword);
  const signUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  signUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
