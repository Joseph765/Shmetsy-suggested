const express = require('express');
const app = express();
const port = 4000;
const api = require('./api.js');

app.use('/:id', express.static('dist'));

app.listen(`${port}`, () => {
  console.log(`Running on port ${port}!`);
});

app.get('/products/:id', (req, res, next) => {
  let data = [];
  api.get("products", req.params.id, (err, result) => {
    if (err) {
      console.log('There was an error getting products from database: ', err);
      next();
    } else {
        data.push(result);
        let shopId = JSON.parse(result)[0].shop_id;
        api.get("shops", shopId, (shopErr, shopResult) => {
        if (err) {
          console.log('There was an error getting shops from database: ', shopErr);
          next();
        } else {
          data.push(shopResult);
          res.send(data);
        }
      });
    }
  });
})
