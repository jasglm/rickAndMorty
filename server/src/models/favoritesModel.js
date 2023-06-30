const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Favorite",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING,
			},
			species: {
				type: DataTypes.STRING,
			},
			gender: {
				type: DataTypes.STRING,
			},
			origin: {
				type: DataTypes.STRING,
			},
			image: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
};
