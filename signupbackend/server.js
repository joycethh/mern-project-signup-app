const express = require("express");
const App = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DATABSE_ACCESS, () =>
  console.log("database is connected")
);
App.listen(4000, () => console.log("server is up and running"));
