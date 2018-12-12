var express = require("express");
var orm = require("./config/orm");

var express = require("express");

var app = express();
var PORT = 1111;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening at localhost:" + PORT);
});