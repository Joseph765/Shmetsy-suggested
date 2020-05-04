import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      productName: '',
      imgUrl: '',
      shopName: '',
      date: '',
      sales: '',
      location: '',
      profileImgUrl: ''
    }
  }

  componentDidMount() {
    const id = window.location.pathname.slice(1, 2);
    $.ajax({
      context: this,
      method: 'GET',
      url: `/products/${id}`,
      success: function(result) {
        var products = JSON.parse(result[0]);
        var shops = JSON.parse(result[1]);
        console.log(JSON.stringify(result[1]));
        console.log(JSON.stringify(result[0]));
        this.updateInfo(products, shops);
      },
      error: function(err) {
        console.log('There was an error getting data from express server: ', err);
      }
    });
  }

  updateInfo(products, shops) {
    this.setState({
      productName: products[0].name,
      imgUrl: products[0].image_url,
      shopName: shops[0].name,
      date: shops[0].date,
      sales: shops[0].sales,
      location: shops[0].location,
      profileImgUrl: shops[0].profile_img_url
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Dumb Data</h1>
        <ul>
          <li>{"productName: " + this.state.productName}</li>
          <img src={this.state.imgUrl} />
          <li>{"shopName: " + this.state.shopName}</li>
          <li>{"date: " + this.state.date}</li>
          <li>{"sales: " + this.state.sales}</li>
          <li>{"location: " + this.state.location}</li>
          <img src={this.state.profileImgUrl} />
        </ul>
      </div>
    );
  }

}

export default App;