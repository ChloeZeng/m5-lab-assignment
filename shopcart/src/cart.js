import React from "react";

function Cart(props) {
  const cartItems = props.products.filter((product) => product.value > 0);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Your Cart Items</h1>

      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <p className="p-4">Your cart is empty.</p>
        ) : (
          cartItems.map((product, index) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;