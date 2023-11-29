const express = require("express");

const app = express();
app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const usersController = require("./controllers/usersController");
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

app.get("/api/movies", movieControllers.getMovies);
app.post("/api/movies", validateMovie, movieControllers.addMovie);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.delete("/api/movies/:id", movieControllers.deleteMovie);

app.get("/api/users", usersController.getUsers);
app.post("/api/users", validateUser, usersController.addUser);
app.get("/api/users/:id", usersController.getUsersById);
app.put("/api/users/:id", validateUser, usersController.updateUser);
app.delete("/api/users/:id", usersController.deleteUser);

module.exports = app;
