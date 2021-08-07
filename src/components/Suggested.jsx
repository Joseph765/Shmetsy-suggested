import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Suggested() {
  let counter = 1;
  const [suggestionItems, updateSuggestionItems] = useState([]);

  function get() {
    $.ajax({
      context: this,
      method: "GET",
      url: "/get/random",
      success: function (result) {
        if (counter === 2) {
          updateSuggestionItems(result);
        }
      },
      error: function (err) {
        console.error(
          "There was an error getting suggested items from database: ",
          err
        );
      },
    });
  }

  useEffect(() => {
    if (counter === 1) {
      counter += 1;
      get();
    }
  }, [counter]);

  const suggestedNodes = suggestionItems.map((item) => {
    return (
      <div className="joseph-suggestedItm">
        <img src={item.image_url} />
        <p className="joseph-itemName">{item.name}</p>
        <div className="joseph-shopName-small">{item.shop_name}</div>
        <div className="joseph-price">{item.price}</div>
        <div className={item.shipping.split(" ").join("")}>{item.shipping}</div>
      </div>
    );
  });

  return <div className="joseph-suggested">{suggestedNodes}</div>;
}

export default Suggested;
