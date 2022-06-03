const express = require("express");
const app = express();
const PORT = process.env.port || 8000;
const path = require("path");
const cors = require("cors");
const alienRaces = require(__dirname + "/races.js");
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
  console.log("html file sent succesfully");
});

app.get("/api/:alienName", (req, res) => {
  let raceName = req.params.alienName.toLowerCase();
  if (alienRaces[raceName]) {
    res.json(alienRaces[raceName]);
  } else {
    res.json(alienRaces["humans"]);
  }
});

app.get("/lcars-lower-decks.min.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/lcars-lower-decks.min.css"));
});

app.get("/lcars.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/lcars.js"));
});

//Server

app.listen(PORT, () => {
  console.log(`You are listening on port: ${PORT}`);
});
