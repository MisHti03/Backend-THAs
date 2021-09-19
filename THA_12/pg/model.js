const { DataTypes } = require("sequelize");
//const { combineTableNames } = require("sequelize/types/lib/utils");

const sequelize = require("./postgres");

const User = sequelize.define("User", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName:"mysqltable"

});


module.exports = User;