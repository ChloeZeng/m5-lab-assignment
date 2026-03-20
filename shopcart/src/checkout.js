import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";

function CheckOut() {

    const location = useLocation();
    const fbUser = location.state?.fbUser;

  return (
    <div className="container mt-5">
      <Card className="checkout-card">
        <Card.Header as="h1">Check Out</Card.Header>

        <Card.Body>
                <div className="d-flex align-items-center">
                {fbUser?.picture?.data?.url && (
                    <img
                    src={fbUser.picture.data.url}
                    alt={fbUser.name}
                    style={{ width: "80px", height: "80px", marginRight: "20px" }}
                    />
                )}

                <h2 className="text-success mb-0">
                    {fbUser?.name ? `Welcome Back ${fbUser.name}!` : "Welcome Back!"}
                </h2>
                </div>

                <p className="mt-4 mb-0">Time to check out?</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CheckOut;