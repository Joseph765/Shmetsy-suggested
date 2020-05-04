const faker = require('faker');
const db = require('../db/index.js');
let shopId = 1;

function getRandomProductImage() {
  let randomNum = Math.floor(Math.random() * 28) + 1;
  return `https://imgforfec.s3.us-east-2.amazonaws.com/${randomNum}.jpg`;
}
function getRandomProfileImage() {
  let randomNum = Math.floor(Math.random() * 5) + 2;
  return `https://imgforfec.s3.us-east-2.amazonaws.com/profile${randomNum}.jpg`;
}

function getRandomDate() {
  const randomDate = (Math.floor(Math.random() * (2020 - 2006)) + 2006).toString();
  return randomDate;
}

function addToProducts() {
  for (let i = 2; i < 101; i ++) {
    if (i === 20 || i === 40 || i === 60 || i === 80 || i === 100) {
      shopId += 1;
    }
    const fakeProductName = faker.commerce.productName();
    var str = `INSERT INTO products (name, shop_id, image_url) VALUES ("${fakeProductName}", ${shopId}, "${getRandomProductImage()}")`;
    db.query(str, function(err) {
      if (err) {
        console.log("There was an error adding to database => ", err);
      }
    });
  }
}

function addToShops() {
  for (let i = 1; i < 5; i ++) {
    var fakeCompanyName = faker.company.companyName();
    var fakeDate = getRandomDate();
    var randomNumber = faker.random.number();
    var location = `${faker.address.city()}, ${faker.address.state()}`;
    var str = `INSERT INTO shops (name, date, sales, location, profile_img_url)
    VALUES ("${fakeCompanyName}", "${fakeDate}", "${randomNumber}", "${location}", "${getRandomProfileImage()}")`;
    db.query(str, function(err) {
      if (err) {
        console.log("There was an error adding to database => ", err);
      }
    });
  }
}

addToShops();
addToProducts();