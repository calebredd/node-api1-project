// implement your API here

const express = require("express");
const Users = require("./data/db.js");
const server = express();

server.use(express.json());

const hobbits = [
  { id: 1, name: "Bilbo Baggins" },
  { id: 2, name: "Frodo Baggins" },
  { id: 3, name: "Samwise Gamgee" }
];
server.get("/api/hobbits", (req, res) => {
  res.status(200).json(hobbits);
});

server.get("/", (req, res) => {
  res.send("Hello from MiddleEarth!");
});

server.get("/api/users", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
      // console.log(users);
    })
    .catch(err => {
      res.status(500).json({errorMessage:'The users information could not be retrieved.'});
      // console.log(err);
    });
});

server.listen(5000, () =>
  console.log(
    "Adventures from Middle Earth await you at https://localhost:5000!"
  )
);
