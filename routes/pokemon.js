const express = require("express");
const pokemonController = require("../controllers/pokemon")
const verifyToken = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/getAll",verifyToken, pokemonController.getAll);
router.post("/create", verifyToken, pokemonController.create);
router.delete("/delete", verifyToken, pokemonController.delete);

module.exports = router;    