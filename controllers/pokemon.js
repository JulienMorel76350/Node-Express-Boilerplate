const { BadRequestError, InternalServerError, NotFoundError } = require("../utils/error");
const { Pokemon } = require("../models/pokemon");

exports.getAll = async (next, res) => {
  try {
    const Pokemons = await Pokemon.find().exec();

    res.status(201).json({
      msg: "Liste récupéré",
      Pokemons,
    });
  } catch (error) {
    if (error instanceof BadRequestError) {
      next(error);
    } else {
      console.error(error.message);
      next(new InternalServerError());
    }
  }
};
exports.create = async (req, res, next) => {
  try {
    const { name , type , lv } = req.body;

    await Pokemon.create({name: name, type: type , lv:lv})

    res.status(201).json({
      msg: "Pokémon créé avec succes",
    });
  } catch (error) {
    if (error instanceof BadRequestError) {
      next(error);
    } else {
      console.error(error.message);
      next(new InternalServerError());
    }
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { name, type, lv } = req.body;
    const existingPokemon = await Pokemon.findOne({
      name: `${name}`,
      type: `${type}`,
      lv: lv,
    }).exec();

    if (!existingPokemon) {
        throw new NotFoundError("Pokémon non trouvée");
    }

    await Pokemon.deleteOne({
      name: `${name}`,
      type: `${type}`,
      lv: lv,
    }).exec();

      res.status(201).json({
        msg: "Pokémon supprimé avec succes",
      });
  } catch (error) {
    if (error instanceof BadRequestError) {
      next(error);
    } else {
      console.error(error.message);
      next(new InternalServerError());
    }
  }
};

