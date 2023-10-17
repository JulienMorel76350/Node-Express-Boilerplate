
const express = require("express");
const router = express.Router();

const porkemonRoutes = require("./pokemon")
const usersRoutes = require("./users")

router.use("/users", usersRoutes)
router.use("/pokemon", porkemonRoutes);

module.exports = router;
