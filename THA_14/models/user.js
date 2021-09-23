const sequelize = require("../database/database");
const Sequelize = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    //can be a user, admin, seller, super-admin
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
// export default User is used for the react. Similarly module.exports is for node