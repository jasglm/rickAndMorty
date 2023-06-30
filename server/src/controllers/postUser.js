const { User } = require("../DB_connection");

module.exports = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) return res.status(400).send("Faltan datos");
		const user = await User.findOrCreate({ where: { email, password } });
		return res.json(user);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
