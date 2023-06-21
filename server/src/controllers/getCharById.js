//! 			----** WEBSERVER **----
// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = function (res, id) {
// 	axios(URL + id)
// 		.then((response) => response.data)
// 		.then((data) => {
// 			const character = {
// 				id: data.id,
// 				name: data.name,
// 				gender: data.gender,
// 				species: data.species,
// 				origin: data.origin?.name,
// 				image: data.image,
// 				status: data.status,
// 			};
// 			res.writeHead(200, { "content-type": "aplication/json" });
// 			res.end(JSON.stringify(character));
// 		})
// 		.catch((error) => {
// 			res.writeHead(500, { "content-type": "text/plain" });
// 			res.end(error.message);
// 			// res.writeHead(500, {'content-type': 'aplication/json'})
// 			// res.end({error: error.message})
// 		});
// };

// module.exports = getCharById;

//!			-----*** EXPRESS && PROMISES ***-----
// const URL = "https://rickandmortyapi.com/api/character/";
// const axios = require("axios");
// const { response } = require("express");

// const getCharById = (req, res) => {
// 	const { id } = req.params;
// 	axios(`${URL}/${id}`)
// 		.then((response) => response.data)
// 		.then(({ status, name, species, origin, image, gender, id }) => {
// 			if (name) {
// 				const character = {
// 					id,
// 					name,
// 					species,
// 					origin,
// 					image,
// 					gender,
// 					status,
// 				};
// 				return res.status(200).json(character);
// 			}
// 			return res.status(404).send("Not found");
// 		})
// 		.catch((error) => res.status(500).send(error.message));
// };

// module.exports = { getCharById };

//!			-----*** EXPRESS && Async/Await && Try/Catch ***-----
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
const { response } = require("express");

const getCharById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await axios(`${URL}/${id}`);

		if (!data.name) throw new Error(`ID: ${id} Not found`);

		const character = {
			id: data.id,
			name: data.name,
			species: data.species,
			origin: data.origin,
			image: data.image,
			gender: data.gender,
			status: data.status,
		};
		return res.status(200).json(character);
	} catch (error) {
		return error.message.includes("ID")
			? res.status(404).send(error.message)
			: res.status(500).send(error.message);
	}
};

module.exports = { getCharById };
