const express = require("express");
const app = express();
const sequelize = require("./database/database");
const isadmin = require("./middleware/isAdmin");
const isauth = require("./middleware/isAuth");
const userroutes = require("./routes/user");
const adminroutes = require("./routes/admin");

require("dotenv").config();

app.use(express.json());

// checks for auth then for admin then shows admin page. double auth is done
app.use("/admin", isauth, isadmin, adminroutes);

// user routes
app.use("/user", userroutes);

app.use((error, req, res, next) => {
  console.log(error.message);
});

// sync comes helpful to keep up to date with the db
sequelize
  .sync()
  .then(() => {
    console.log("Server connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.error(err);
  });