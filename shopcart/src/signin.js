import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    
    if (document.getElementById("facebook-jssdk")) return;

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "26091694077164790",
        cookie: true,
        xfbml: false,
        version: "v23.0"
      });
    };

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  const handleFacebookLogin = () => {
    if (!window.FB) {
      alert("Facebook SDK is still loading. Please try again in a moment.");
      return;
    }

    window.FB.login(
      function (response) {
        if (response.authResponse) {
          // get user info from FB
          window.FB.api(
            "/me",
            { fields: "name,email,picture" },
            function (userInfo) {
              console.log("Facebook user:", userInfo);
              navigate("/checkout", { state: { fbUser: userInfo } });
            }
          );
        } else {
          alert("Facebook login was cancelled or not authorized.");
        }
      },
      { scope: "public_profile" }
    );
  };

  return (
    <div className="container mt-5">
      <Card className="signin-card">
        <Card.Header as="h1">Sign In</Card.Header>

        <Card.Body>
          <h3 className="mb-4">Please login using one of the following:</h3>

          <div className="d-flex flex-column align-items-start">
            <Form onSubmit={handleSubmit} className="signin-form-box mb-4">
              <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>

            <Button variant="primary" onClick={handleFacebookLogin}>
            LOGIN WITH FACEBOOK
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignIn;