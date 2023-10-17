const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = { Pokemon };
