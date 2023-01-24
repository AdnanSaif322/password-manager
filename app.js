const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen("3000", () => {
      console.log("app listening on port 3000");
    });
    db = getDb();
  }
});
// routes
app.get("/pass", (req, res) => {
  // current page

  let passwords = [];

  db.collection("passwords")
    .find()
    .forEach((pass) => passwords.push(pass))
    .then(() => {
      res.status(200).json(passwords);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});
