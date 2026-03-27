import React from "react";
import DisplayProducts from "./displayProducts";

function Home(props) {
  return (
    <div>
      <div className="container text-center mt-4 mb-4">
        <label className="me-2">Sort Price By:</label>

        <select value={props.sortType} onChange={props.handleSortChange}>
          <option value="normal">Normal</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>

      <DisplayProducts
        products={props.products}
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
      />
    </div>
  );
}

export default Home;