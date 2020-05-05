const db = require('../db/index.js');

const apiMethods = {
  get: (table, id, callback) => {
    db.query(`SELECT * FROM ${table} WHERE id = ${parseInt(id)}`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, JSON.stringify(result));
      }
    });
  },
  get8Random: (id, callback) => {
    db.query(`SELECT * FROM products WHERE shop_id = ${id}`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, JSON.stringify(result));
      }
    });
  },
};

module.exports = apiMethods;
