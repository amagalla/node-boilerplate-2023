const express = require("express"),
  router = express.Router(),
  axios = require("axios");


/**
 * @swagger
 * /api/pokemon:
 *   get:
 *     description: Get list of Pokemon
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */

router.get(
    "/",
    async (req, resp, next) => {
        let pokemon;

        try {
            pokeData = await axios.get("https://pokeapi.co/api/v2/pokemon");
            pokemon= pokeData.data.results.map((poke) => poke.name);
            
        } catch(err) {
            error = new Error("Error getting pokemon");
            error.status = 400;
            return next(error);
        }

        resp.status(200).send(pokemon);
});

module.exports = router;