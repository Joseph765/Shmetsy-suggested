import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Suggested() {

  let counter = 1;
  const [suggestionItems, updateSuggestionItems] = useState([]);

  function get() {
    $.ajax({
      context: this,
      method: 'GET',
      url: '/get/random',
      success: function(result) {
        updateSuggestionItems(result);
      },
      error: function(err) {
        console.error('There was an error getting suggested items from database: ', err);
      }
    });
  }

  useEffect(() => {
    counter += 1;
    get();
  }, [counter]);

  const suggestedNodes = suggestionItems.map( item => {
    return (
      <div className="suggestedItm">
        <img src={item.image_url} />
        <p className="itemName" >{item.name}</p>
        <div className="shopName-small">{item.shop_name}</div>
        <div className="price">{item.price}</div>
        <div className={item.shipping.split(' ').join('')} >{item.shipping}</div>
      </div>
    );
  });


  return (
    <div className="suggested">
      {suggestedNodes}
    </div>
  );
}

export default Suggested;