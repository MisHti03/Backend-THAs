const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "postgrespass", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
