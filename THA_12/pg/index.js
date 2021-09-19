const express = require("express");
const User = require("./model");

const app = express();

app.get("/", (req, res) =>{
    res.send("hello");
});

const createUser = async (req, res) => {
    const newUser = new User({fullName: "Bharti", email: "bharti@mail.com", password:"bharti@219"});
    const savedUser = await newUser.save();
    console.log("user saved now");
    res.status(201).json(savedUser);

}

app.get("/create", createUser);

app.listen(3000, (err) => {
    console.log("connection estabilshed");
});

