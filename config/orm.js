var connection = require("./connection");

let orm = {
  all: function (input, modelCb) {
      let queryStr = "SELECT * FROM " + input + ";";
      connection.query(queryStr, function(err, res) {
          if (err) {
              throw err;
          }
          modelCb(res);
      })
  },
  insertOne: function (table, input, modelCb) {
      let queryStr = `INSERT INTO ${table} (burger_name) VALUE ('${input}')`
      
      connection.query(queryStr, function (err, res) {
          if (err) {
              throw err;
          }
          modelCb(res);
      })
  },
  updateOne: function (table, id, val, modelCb) {
      let queryStr = `UPDATE ${table} SET devoured = ${val} WHERE ${id}`

      connection.query(queryStr, function (err, res) {
          if (err) {
              throw err;
          }
          modelCb(res);
      });
  }
}

module.exports = orm;