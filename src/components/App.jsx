import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ShopInfo from './ShopInfo.jsx';
import ShopItems from './ShopItems.jsx';
import Suggested from './Suggested.jsx';
import Footer from './Footer.jsx';

function App() {

  const obj = [];

  const [status, updateStatus] = useState([404, "Loading..."]);
  const [shopInfoData, updateShopInfoData] = useState('');
  const [randomItems, updateRandomItems] = useState(obj);

  function getRequest() {
    const path = window.location.pathname;
    let id;
    if (path[2] === '/') {
      id = window.location.pathname.slice(1, 2);
    } else if (path[3] === '/') {
      id = window.location.pathname.slice(1, 3);
    } else {
      id = window.location.pathname.slice(1, 4);
    }


    fetch(`/products/${id}`)
      .then(result => {
        updateStatus([result.status, result.statusText]);
        if (result.status === 200) {
          return result.json();
        } else {
          return result.status;
        }
      })
      .then(result => {
        if (typeof result !== 'NUMBER') {
          var products = JSON.parse(result[0]);
          var shops = JSON.parse(result[1]);
          var randomItems = JSON.parse(result[2]);
          updateBasicInfo(products, shops, randomItems);
        }
      });
  }

  useEffect(() => {
    getRequest();
  }, []);

  function updateBasicInfo(products, shops, randomProductItems) {
    updateShopInfoData({
      productsName: products[0].name,
      imgUrl: products[0].image_url,
      shopName: shops[0].name,
      date: shops[0].date,
      sales: shops[0].sales,
      location: shops[0].location,
      profileImgUrl: shops[0].profile_img_url,
      numOfItems: shops[0].items
    });
    updateRandomItems(randomProductItems);
  }

  if (status[0] !== 200) {
    return (
      <>
        <h1 className="joseph-error">{status[0]}</h1>
        <p className="joseph-error-desc">{status[1]}</p>
      </>
    );
  } else {
    return (
      <div className="joseph-wrapper">
        <img className="joseph-topImg" src="https://imgforfec.s3.us-east-2.amazonaws.com/bettershmetsy.png" />
        <div className="joseph-shop">
          <ShopInfo data={shopInfoData} />
          <ShopItems data={randomItems} />
        </div>
        <div className="joseph-alsoLike">
          <h1>You may also like</h1>
          <span className="joseph-shopMore">Shop more similar items <i className="fa fa-arrow-right joseph-rightArrow"></i></span>
        </div>
        <div className="joseph-suggested">
          <Suggested />
        </div>
        <h1 className="joseph-popular">Popular right now</h1>
        <div className="joseph-suggested">
          <Suggested />
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
