const database = require("../../database");

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      users ? res.json(users) : res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id=?", [id])
    .then(([users]) => {
      users.length ? res.json(users[0]) : res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addUser = (req, res) => {
  const { firstname, lastname, email, city, language } = req.body;

  database
    .query(
      `INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)`,
      [firstname, lastname, email, city, language]
    )
    .then(([result]) => {
      res.status(201).send({ id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getUsers, getUsersById, addUser };
