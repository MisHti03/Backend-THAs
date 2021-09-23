// for the users pge
const User = require("../models/user");
const jwt = require("jsonwebtoken");


exports.login = async (req, res, next) => {
  const { name, email } = req.body;
  // find if user is signed up or not
  const user = await User.findAll({ where: { email: email } });
  if (user.length == 0) {
    return res.json({
      msg: "Not signed up",
    });
  }
  // token for security
  const token = jwt.sign(
    {
      userId: user[0].id,
      email: email,
    }, 
    // token takes a secret key to mix with the input given to generate unique token
    process.env.SECRET_KEY,
    // expiry to remove the user from the login data after given time
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    token,
    user,
  });
};

exports.signup = async (req, res, next) => {
  const { name, email, role } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }
    const user = new User({
      email: email.toLowerCase(),
      name: name,
      role: role,
    });
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong while signup!");
  }
};