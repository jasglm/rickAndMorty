const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("User", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			isEmail: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
