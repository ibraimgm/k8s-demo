const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>It works!</h1>");
});

app.get("/time", (req, res) => {
  res.send(new Date().toISOString());
});

app.listen(8080, () => {
  console.log("Server listening at port 8080");
});
