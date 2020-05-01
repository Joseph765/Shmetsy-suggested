const db = require('../db/index.js');

const apiMethods = {
  get: function(table, id, callback) {
    db.query(`SELECT * FROM ${table} WHERE id = ${parseInt(id)}`, function(err, result) {
      if (err) {
        callback(err);
      } else {
        callback(null, JSON.stringify(result));
      }
    });
  }
}

module.exports = apiMethods;