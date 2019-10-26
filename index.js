// implement your API here

const express = require("express");
const Users = require("./data/db.js");
const server = express();

server.use(express.json());

const hobbits = [
  {
    name: "Bilbo Baggins",
    bio: "The first hobbit to leave the shire"
  },
  {
    name: "Frodo Baggins",
    bio: "The ring bearer"
  },
  {
    name: "Samwise Gamgee",
    bio: "Gardener and poet. Married to Rose Cotton"
  }
];
server.get("/", (req, res) => {
  res.send("Hello from MiddleEarth!");
});
server.get("/api/hobbits", (req, res) => {
  res.status(200).json(hobbits);
});

server.get("/api/users", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
      // console.log(users);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "The users information could not be retrieved."
      });
      // console.log(err);
    });
});
server.get("/api/users/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json(err, { errorMessage: "That user could not be found." });
    });
});
server.post("/api/users", (req, res) => {
  const { name, bio } = req.body;
  // console.log(name);
  // console.log(bio);
  if (!name || !bio) {
    res.status(400).send("A Name and Bio must be provided to add a user.");
  } else {
    Users.insert({ name: name, bio: bio })
      .then(user => {
        res.status(201).json(user);
      })
      .catch(() => {
        res.status(500).json({ errorMessage: "Unable to add User." });
      });
  }
});
server.put("/api/users/:id", (req, res) => {
  const { name, bio } = req.body;
  // console.log(name);
  // console.log(bio);
  if (!name || !bio) {
    res.status(400).send("A Name and Bio must be provided to update a user.");
  } else {
    Users.update(req.params.id,{ name: name, bio: bio })
      .then(user => {
        res.status(202).json(user);
      })
      .catch(() => {
        res.status(500).json({ errorMessage: "Unable to add User." });
      });
  }
});
server.delete("/api/users/:id", (req, res) => {
  Users.remove(req.params.id)
    .then(user => {
      res.status(202).json(user);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to remove user." });
    });
});

server.listen(5000, () =>
  console.log(
    "Adventures from Middle Earth await you at https://localhost:5000!"
  )
);
