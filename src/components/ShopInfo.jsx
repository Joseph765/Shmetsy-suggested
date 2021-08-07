import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ShopInfo({ data }) {
  return (
    <div className="joseph-shopInfo">
      <img src={data.profileImgUrl} />
      <span className="joseph-moreFrom">More from</span>
      <span className="joseph-shopName">{data.shopName}</span>
      <span className="joseph-seeAll">
        See all {data.numOfItems} items{" "}
        <i className="fa fa-arrow-right joseph-rightArrow"></i>
      </span>
      <div className="joseph-salesAndDate">
        <div className="joseph-sales">
          <h4>Sales</h4>
          <span>{data.sales}</span>
        </div>
        <div className="joseph-date">
          <h4>On Shmetsy since</h4>
          <span>{data.date}</span>
        </div>
      </div>
      <span className="joseph-based">Based in</span>
      <span className="joseph-location">{data.location}</span>
    </div>
  );
}

export default ShopInfo;
