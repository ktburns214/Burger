var express = require("express");

var burger = require("../models/burger");

let router = express.Router();

router.get("/", function (req, res) {
    burger.allUnDev(function (data) {
        let hbsObj = { burgers: data };
        res.render("index", hbsObj);
    });
});

router.post("/api/new", function (req, res) {

    burger.create(req.body.name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let id = "id = " + req.params.id;

    burger.update(
        req.body.devoured,
        id,
        function(result) {
          if (result.changedRows === 0) {
            return res.status(404).end();
          }
          res.status(200).end();
    
        }
      );
});

module.exports = router;