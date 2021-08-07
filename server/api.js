const db = require("../db/index.js");

const apiMethods = {
  get: (table, id, callback) => {
    db.query(
      `SELECT * FROM ${table} WHERE id = ${parseInt(id)}`,
      (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, JSON.stringify(result));
        }
      }
    );
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
  get6Random: (callback) => {
    const results = [];
    let counter = 0;
    const usedImages = [];

    function getRandomProducts(index) {
      db.query(
        `SELECT * FROM products WHERE id = ${
          Math.floor(Math.random() * 100) + 1
        }`,
        (err, result) => {
          if (err) {
            return false;
          }
          const jsonResult = JSON.parse(JSON.stringify(result))[0];
          if (usedImages.includes(jsonResult.image_url)) {
            getRandomProducts(index);
          } else {
            usedImages.push(jsonResult.image_url);
            results.push(jsonResult);
            const lastResult = results[results.length - 1];
            db.query(
              `SELECT name FROM shops WHERE id = ${lastResult.shop_id}`,
              (shopErr, shopResult) => {
                if (shopErr) {
                  callback(shopErr);
                } else {
                  lastResult.shop_name = JSON.parse(
                    JSON.stringify(shopResult)
                  )[0].name;
                  let shopNameCounter = 0;
                  for (let i = 0; i < results.length; i += 1) {
                    if (results[i].shop_name) {
                      shopNameCounter += 1;
                    }
                  }
                  if (shopNameCounter === 6 && counter === 0) {
                    counter += 1;
                    callback(null, results);
                  }
                }
              }
            );
          }
        }
      );
    }

    for (let i = 0; i < 6; i += 1) {
      getRandomProducts(i);
    }
  },
};

module.exports = apiMethods;
