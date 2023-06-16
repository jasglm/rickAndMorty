const http = require("http");
const getCharById = require("./controllers/getCharById");

http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");

	if (req.url.includes("/rickandmorty/character")) {
		let id = req.url.split("/").at(-1);
		getCharById(res, id);
		console.log("personaje añadido");
	}
}).listen(3001, () => console.log("Port on 3001"));
