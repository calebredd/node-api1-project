// implement your API here

const express = require("express");

const server = express();
const hobbits = [
  { id: 1, name: 'Bilbo Baggins' },
  { id: 2, name: 'Frodo Baggins' },
  { id: 3, name: 'Samwise Gamgee' }
]
server.get("/", (req, res) => {
  res.send("Hello from MiddleEarth!");
});

server.get("/hobbits", (req, res) => {
  // req.match.params.id
  res.status(200).json(hobbits);
});


server.listen(5000, () =>
  console.log("Adventures from Middle Earth await you at https://localhost:5000!")
);
