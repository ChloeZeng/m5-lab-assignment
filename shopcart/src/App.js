import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Cart from "./cart";
import SignIn from "./signin";
import CheckOut from './checkout';
import productsData from "./products";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: productsData,
      sortType: "normal"
    };
  }

  handleSortChange = (e) => {
  this.setState({ sortType: e.target.value });
  };

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
    let sortedProducts = [...this.state.products];

    if (this.state.sortType === "normal") {
      sortedProducts.sort((a, b) => a.id - b.id);
    } else if (this.state.sortType === "lowest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (this.state.sortType === "highest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    const totalItems = this.state.products
      .map(product => product.value)
      .reduce((sum, value) => sum + value, 0);

    return (
      <BrowserRouter>
        <Navbar totalItems={totalItems} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={sortedProducts}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                sortType={this.state.sortType}
                handleSortChange={this.handleSortChange}
              />
            }
          />

          <Route
            path="/cart"
            element={<Cart products={this.state.products} />}
          />

          <Route
            path="/signin"
            element={<SignIn />}
          />

          <Route
            path="/checkout"
            element={<CheckOut />}
          />
        </Routes>

      </BrowserRouter>
    );
  }
}

export default App;