import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Suggested() {
  let counter = 1;
  const [suggestionItems, updateSuggestionItems] = useState([]);
  const [status, updateStatus] = useState({
    statusCode: 404,
    statusText: "Loading...",
  });

  function get() {
    fetch("/get/random")
      .then((result) => {
        updateStatus({
          statusCode: result.status,
          statusText: result.statusText,
        });

        if (result.status === 200) {
          return result.json();
        }

        return result.status;
      })
      .then((result) => {
        if (isNaN(result)) {
          updateSuggestionItems(result);
        }
      });
  }

  useEffect(() => {
    get();
  }, []);

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

  if (status.statusCode === 200) {
    return <div className="joseph-suggested">{suggestedNodes}</div>;
  }

  return (
    <div>
      <h1 className="joseph-error">{status.statusCode}</h1>
      <p>There was an error with fetching data for suggested items</p>
      <p className="joseph-error-desc">{status.statusText}</p>
    </div>
  );
}

export default Suggested;
