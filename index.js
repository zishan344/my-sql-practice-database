const express = require("express");
const app = express();
const connection = require("./connection");
const middleware = require("./middleware");

app.use(middleware);

app.get("/user", (req, res) => {
  const query = "SELECT * FROM user_list";
  connection.query(query, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.post("/postUser", (req, res) => {
  const body = req.body;
  const query = `SELECT * FROM user_list`;
  connection.query(query, body, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});
// get single user
app.get("/:id", (req, res) => {
  // const id = req.params.id;
  console.log(req.params.id);
  const query = "SELECT * FROM user_list WHERE id= ?";
  connection.query(query, [req.params.id], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  const params = req.body;
  const { role, name, area, class: sreni } = req.body;
  console.log(params);
  const query = "UPDATE `user_list` SET name= ?, role= ? WHERE id= ?";
  connection.query(query, [role, name, id], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.patch("/:id", (req, res) => {
  const id = req.params.id;
  const params = req.body;
  console.log(params);
  const query = "UPDATE `user_list` SET `role`='moderator' WHERE id= ?";
  connection.query(query, id, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM `user_list` WHERE id=?";
  connection.query(query, id, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.get("/", (req, res) => {
  res.send("hallo world");
});

module.exports = app;
