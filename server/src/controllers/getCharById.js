const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = function (res, id) {
	axios(URL + id)
		.then((response) => response.data)
		.then((data) => {
			const character = {
				id: data.id,
				name: data.name,
				gender: data.gender,
				species: data.species,
				origin: data.origin?.name,
				image: data.image,
				status: data.status,
			};
			res.writeHead(200, { "content-type": "aplication/json" });
			res.end(JSON.stringify(character));
		})
		.catch((error) => {
			res.writeHead(500, { "content-type": "text/plain" });
			res.end(error.message);
			// res.writeHead(500, {'content-type': 'aplication/json'})
			// res.end({error: error.message})
		});
};

module.exports = getCharById;
