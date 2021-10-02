const { DataTypes } = require("sequelize");

const sequelize = require("../database");


module.exports = sequelize.define("products", {
    //prpduct id
    id:{
        type: DataTypes.BIGINT,
        allownull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    //no of products list
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    image: {
        type: DataTypes.STRING,
    },
});
