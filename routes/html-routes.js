// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");
const { response } = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));
app.use(express.static('routes'));

// Routes
module.exports = function(app) {
  // GET * returns index.html
  app.get('*', function(req, res) {
    response.sendFile(path.join(__dirname, '../public/index.html'));
  });
  // GET /notes returns notes.html file
  app.get('/notes', function(req, res) {
    response.sendFile(path.join(__dirname, '../public/notes.html'));
  });
}