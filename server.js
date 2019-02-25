var express = require("express");
var orm = require("./config/orm");

var express = require("express");

var app = express();
var PORT = process.env.PORT || 1234;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening at localhost:" + PORT);
});