const express = require("express");
const App = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABSE_ACCESS, () =>
  console.log("culster 0 database-mytabless is connected")
);
//invoke middleware in the App.
App.use(express.json());
App.use(cors());

App.use("/app", routesUrls);
App.listen(4000, () => console.log("server is up and running"));
