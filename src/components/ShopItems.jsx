import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function ShopItems({ data }) {

  const items = data.map( (item, index) => {
    if (index < 8) {
      return (
        <div className="joseph-imgItem">
          <img src={item.image_url} />
          <div className="joseph-textWrapper">
            <p className="joseph-itemName">{item.name}</p>
            <p className="joseph-price">{item.price}</p>
            <p className={item.shipping.split(' ').join('')}>{item.shipping}</p>
          </div>
        </div>
      );
    }
  })

  return (
    <div className="joseph-imgContainer">
      {items}
    </div>
  );
}

export default ShopItems