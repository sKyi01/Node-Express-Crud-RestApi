const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const courseRouter = require("./routes/courses");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use("/api/v1/courses", courseRouter);

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
