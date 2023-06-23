const app = require("../app");
const session = require("supertest");
const request = session(app);
const trueLogin = "?email=jas@prueba.com&password=12345678";
const falseLogin = "?email=perrito@prueba.com&password=98756213";
const access = { access: true };
const character = {
	id: "923",
	name: "Jas",
	species: "origin",
	image: "image.jpg",
	gender: "male",
	status: "alive",
	origin: {
		name: "earth (c-137)",
	},
};

describe("Test de RUTAS", () => {
	describe("GET /rickandmorty/character/:id", () => {
		it("Responde con estatus: 200", async () => {
			const response = await request.get("/rickandmorty/character/1");
			expect(response.statusCode).toBe(200);
			// await request.get("/rickandmorty/character/1").expect(200);
		});
		it("Responde un obejeto con las propiedades: 'id', 'name', 'especies', 'gender', 'status', 'origin', 'image'", async () => {
			const response = await request.get("/rickandmorty/character/1");
			for (const prop in character) {
				expect(response.body).toHaveProperty(prop);
			}
		});
		it("Si hay un error responde con status: 500", async () => {
			const response = await request.get(
				"/rickandmorty/character/564654j"
			);
			expect(response.statusCode).toBe(500);
		});
	});
	describe("GET /rickandmorty/login", () => {
		it("Responde con un objeto con la propiedad access en true si la información del usuario es valida", async () => {
			const response = await request.get(
				`/rickandmorty/login${trueLogin}`
			);

			expect(response.body).toEqual(access);
		});
		it("Responde con un objeto con la propiedad access en false si la información del usuario es invalida", async () => {
			const response = await request.get(
				`/rickandmorty/login${falseLogin}`
			);
			access.access = false;
			expect(response.body).toEqual(access);
		});
	});
	describe("POST /rickandmorty/fav", () => {
		it("Debe guardar el personaje en favoritos", async () => {
			const response = await request
				.post("/rickandmorty/fav")
				.send(character);
			expect(response.body).toContainEqual(character);
		});
		it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
			character.id = 1234;
			character.name = "Luca";
			const response = await request
				.post("/rickandmorty/fav")
				.send(character);
			expect(response.body.length).toBe(2);
		});
	});
	describe("DELETE /rickandmorty/fav/:id", () => {
		it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos, sin modificar", async () => {
			const response = await request.delete("/rickandmorty/fav/2");
			console.log(response.body);
			expect(response.body.length).toBe(2);
		});
		it("Si el ID enviado existe, deberia eliminarlo de favoritos", async () => {
			const response = await request.delete("/rickandmorty/fav/1234");
			expect(response.body.length).toBe(1);
		});
	});
});
