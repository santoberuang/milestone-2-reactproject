import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { CartShopping } from 'react-icons/fa;

interface NavbarProps {
  cartCount: number;
}
const NavbarCategory: React.FC<NavbarProps> = ({ cartCount }) => {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");

    navigate("/login");
  };

  return (
    <Navbar className="bg-body-tertiary justify-content-center fixed-top w">
      <Form>
        <Navbar.Brand href="#home">Your Store</Navbar.Brand>
      </Form>
      <Form>
        {/* <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup> */}
      </Form>
      <Form>
        <Row>
          {/* <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col> */}
          <Col xs="auto">
            <Button variant="primary" onClick={handleCartClick}>
              {/* <CartShopping /> */}
              Cart <Badge bg="secondary">{cartCount}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <Button type="button" onClick={handleLogOut}>
              Log Out
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default NavbarCategory;
