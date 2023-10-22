const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

const mainRoutes = require("./routes/index");

const app = express();

app.use(express.json());

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

app.use("/api", mainRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();