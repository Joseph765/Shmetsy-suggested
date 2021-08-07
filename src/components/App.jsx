import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ShopInfo from "./ShopInfo.jsx";
import ShopItems from "./ShopItems.jsx";
import Suggested from "./Suggested.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [status, updateStatus] = useState({
    statusCode: 404,
    statusText: "Loading...",
  }); //status of data fetching
  const [shopInfo, updateShopInfo] = useState([]); //data for current shop on page
  const [items, updateItems] = useState([]); //data for suggested items

  function getRequest() {
    //getting id from current path url
    const path = window.location.pathname;
    let id;
    if (path[2] === "/") {
      id = window.location.pathname.slice(1, 2);
    } else if (path[3] === "/") {
      id = window.location.pathname.slice(1, 3);
    } else {
      id = window.location.pathname.slice(1, 4);
    }

    //update status to 404 is id in pathname is not a number
    if (isNaN(id)) {
      updateStatus({ statusCode: 404, statusText: `Page Not Found: ${id}` });
      return;
    }

    //fetching data for products with id
    fetch(`/products/${id}`)
      .then((result) => {
        //uses status from result to update state status
        updateStatus({
          statusCode: result.status,
          statusText: result.statusText,
        });
        //if fetch was successful, the next .then() block will update state with new data
        if (result.status === 200) {
          return result.json();
        }
        //if the fetch was unsuccessful then the next .then() will not update
        return result.status;
      })
      .then((result) => {
        if (typeof result !== "NUMBER") {
          //second item in data array is an object with the current shop info
          var shops = JSON.parse(result[1]);
          //third item in data array is an object with all the items in the database
          var randomItems = JSON.parse(result[2]);
          updateBasicInfo(shops, randomItems);
        }
      });
  }

  useEffect(() => {
    //calls getRequest function when page loads or the path (id) changes
    getRequest();
  }, []);

  function updateBasicInfo(shops, randomProductItems) {
    //updates shop info with current shop data fetched
    updateShopInfo({
      shopName: shops[0].name,
      date: shops[0].date,
      sales: shops[0].sales,
      location: shops[0].location,
      profileImgUrl: shops[0].profile_img_url,
      numOfItems: shops[0].items,
    });

    //updates shop items
    updateItems(randomProductItems);
  }

  if (status.statusCode !== 200) {
    return (
      <div>
        <h1 className="joseph-error">{status.statusCode}</h1>
        <p className="joseph-error-desc">{status.statusText}</p>
      </div>
    );
  }

  return (
    <div className="joseph-wrapper">
      <img
        className="joseph-topImg"
        src="https://imgforfec.s3.us-east-2.amazonaws.com/bettershmetsy.png"
      />
      <div className="joseph-shop">
        <ShopInfo data={shopInfo} />
        <ShopItems data={items} />
      </div>
      <div className="joseph-alsoLike">
        <h1>You may also like</h1>
        <span className="joseph-shopMore">
          Shop more similar items{" "}
          <i className="fa fa-arrow-right joseph-rightArrow"></i>
        </span>
      </div>
      <div className="joseph-suggested">
        <Suggested data={items} />
      </div>
      <h1 className="joseph-popular">Popular right now</h1>
      <div className="joseph-suggested">
        <Suggested data={items} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
