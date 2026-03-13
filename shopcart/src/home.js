import React from "react";
import DisplayProducts from "./displayProducts";

function Home(props) {
  return (
    <DisplayProducts
      products={props.products}
      handleIncrement={props.handleIncrement}
      handleDecrement={props.handleDecrement}
    />
  );
}

export default Home;