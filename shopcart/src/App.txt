import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  return (
    <div className="bg-info p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="m-0">Shop to React, ChloeStore!</h1>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="ms-2">{props.totalItems} items</span>
        </div>
      </div>
    </div>
  );
}

function ProductList(props) {
  return (
    <div className="container mt-4">
      {props.products.map((product, index) => (
        <div key={index} className="border-bottom py-4">
          <h4>{product.desc}</h4>

          <div className="d-flex align-items-center">
            <img src={product.image} width="120" alt={product.desc} />

            <div className="ms-4 d-flex align-items-center">
              

              <div
                style={{
                  border: "2px solid #ddd",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 10px"
                }}
              >
                {product.value}
              </div>

              

              <span className="ms-2">quantity</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { image: "/products/cologne.jpg", desc: "Unisex Cologne", value: 0 },
        { image: "/products/iwatch.jpg", desc: "Apple iWatch", value: 0 },
        { image: "/products/mug.jpg", desc: "Unique Mug", value: 0 },
        { image: "/products/wallet.jpg", desc: "Mens Wallet", value: 0 }
      ]
    };
  }

  handleIncrement = (index) => {
    const updatedProducts = [...this.state.products];
    updatedProducts[index].value += 1;
    this.setState({ products: updatedProducts });
  };

  handleDecrement = (index) => {
    const updatedProducts = [...this.state.products];
    if (updatedProducts[index].value > 0) {
      updatedProducts[index].value -= 1;
      this.setState({ products: updatedProducts });
    }
  };

  render() {
    const totalItems = this.state.products
      .map(product => product.value)
      .reduce((sum, value) => sum + value, 0);

    return (
      <div>
        <Header totalItems={totalItems} />

        <ProductList
          products={this.state.products}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;