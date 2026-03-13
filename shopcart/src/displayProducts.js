import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImg, setShowImg] = useState({});

  const handleClose = () => setShow(false);

  const handleShow = (product) => {
    setShow(true);
    setShowImg(product);
  };

  return (
    <div className="container mt-4">
      {props.products.map((product, index) => (
        <div key={index} className="border-bottom py-4">
          <h4>{product.desc}</h4>

          <div className="d-flex align-items-center">
            <img
              src={product.image}
              width="120"
              alt={product.desc}
              onClick={() => handleShow(product)}
              style={{ cursor: "pointer" }}
            />

            <div className="ms-5 d-flex align-items-center">
              <Button
                variant="secondary"
                className="me-3"
                onClick={() => props.handleIncrement(index)}
              >
                <FontAwesomeIcon icon={faCirclePlus} />
              </Button>

              <Button
                variant="secondary"
                className="me-4"
                onClick={() => props.handleDecrement(index)}
              >
                <FontAwesomeIcon icon={faCircleMinus} />
              </Button>

              <div className="me-3">
                <div>Quantity</div>
              </div>

              <div
                style={{
                  border: "2px solid #ddd",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {product.value}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImg.desc}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={showImg.image}
            width="350"
            alt={showImg.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings: </span>
            {showImg.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;