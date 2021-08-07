const faker = require("faker");
const db = require("../db/index.js");

let shopId = 1;

function getRandomProductImage() {
  const randomNum = Math.floor(Math.random() * 28) + 1;
  return `https://imgforfec.s3.us-east-2.amazonaws.com/${randomNum}.jpg`;
}

function getRandomProfileImage() {
  const randomNum = Math.floor(Math.random() * 4) + 2;
  return `https://imgforfec.s3.us-east-2.amazonaws.com/profile${randomNum}.jpg`;
}

function getRandomShippingInfo() {
  const randomNum = Math.floor(Math.random() * 2);
  if (randomNum === 0) {
    return "FREE shipping";
  }
  return "Free shipping eligible";
}

function getRandomDate() {
  const randomDate = (
    Math.floor(Math.random() * (2020 - 2006)) + 2006
  ).toString();
  return randomDate;
}

function addToProducts() {
  for (let i = 2; i < 101; i += 1) {
    if (i === 20 || i === 40 || i === 60 || i === 80) {
      shopId += 1;
    }
    const fakeProductName = faker.commerce.productName();
    const fakePrice = faker.commerce.price();
    const str = `INSERT INTO products (name, shop_id, shipping, price, image_url) VALUES ("${fakeProductName}", ${shopId}, "${getRandomShippingInfo()}", "${`$${fakePrice}`}", "${getRandomProductImage()}")`;
    db.query(str, (err) => {
      if (err) {
        console.log("There was an error adding to database => ", err);
      }
      console.log("Populated! Press ^C to exit.");
    });
  }
}

function addToShops() {
  for (let i = 1; i < 5; i += 1) {
    const fakeCompanyName = faker.company.companyName();
    const fakeDate = getRandomDate();
    const randomNumber = faker.random.number();
    const location = `${faker.address.city()}, ${faker.address.state()}`;
    const fakeNumOfItems = Math.floor(Math.random() * 500) + 200;
    const str = `INSERT INTO shops (name, date, sales, location, profile_img_url, items)
    VALUES ("${fakeCompanyName}", "${fakeDate}", "${randomNumber}", "${location}", "${getRandomProfileImage()}", "${fakeNumOfItems.toString()}")`;
    db.query(str, (err) => {
      if (err) {
        console.log("There was an error adding to database => ", err);
      }
    });
  }
}

addToShops();
addToProducts();

module.exports = {
  getRandomDate,
};
