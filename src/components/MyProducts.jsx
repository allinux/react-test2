import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class MyProducts extends React.Component {
  state = {
    products: []
  };

  retriveProducts = () => {
    //alert("aaaaa");
    //var l = [1, 2, 3];
    axios.get("https://api.myjson.com/bins/74l63").then(res => {
      var products = res.data.products;
      products.map((v, i) => console.log(v));
      this.setState({ products });
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.retriveProducts}>click!</button>
        </div>
        {this.state.products.map(
          (product, i) =>
            product.quantity > 4 && (
              <div key={i}>
                {product.name} {product.quantity}
              </div>
            )
        )}
      </div>
    );
  }
}
