import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Cart(props) {
  const cartItems = props.products.filter((product) => product.value > 0);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Your Cart Items</h1>

      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <>
            <p className="p-4 mb-2">There are 0 items in your cart.</p>

            <div className="px-4 pb-4">
              <Link to="/">
                <Button variant="success">Continue Shop</Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            {cartItems.map((product, index) => (
              <div key={index} className="cart-row">
                <div className="cart-product-block">
                  <img
                    src={product.image}
                    alt={product.desc}
                    className="cart-product-image"
                  />
                  <p className="cart-product-name">{product.desc}</p>
                </div>

                <div className="cart-qty-text">
                  <strong>Quantity: {product.value}</strong>
                </div>
              </div>
            ))}

            <div className="px-4 py-4">
              <Link to="/signin">
                <Button variant="success">Check Out</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;