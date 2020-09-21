// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");

// SET UP EXPRESS
const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));
app.use(express.static('routes'));

// ROUTES
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Listening
app.listen(PORT, function(err) {
  if (err) console.log(err);
  console.log("listening on PORT " + PORT);
  console.log("https://damp-basin-09779.herokuapp.com/");
});