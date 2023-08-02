const express = require("express");
const cors = require("cors");
const getUser = require("./controllers/getUsers.controller");
const getUserIdeas = require("./controllers/getUserIdeas.controller");
const postUser = require("./controllers/postUser.controller");
const postUserIdea = require("./controllers/postUserIdea.controller");
const app = express();
const db = require("./connection");

app.use(cors());
app.use(express.json());

app.get("/api/user", getUser);
app.get("/api/user_ideas", getUserIdeas);

app.post("/api/user", postUser);
app.post("/api/user_ideas", postUserIdea);

module.exports = app;
