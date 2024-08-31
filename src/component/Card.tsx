import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

interface CardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  isInCart: boolean;
}
const CardContent: React.FC<CardProps> = ({
  id,
  title,
  // description,
  price,
  images,
  onAddToCart,
  onRemoveFromCart,
  isInCart,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Container className="flex margin-left-10 top-20">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="h-120px object-scale-down">
          <Col xs={6} md={4}>
            <Image
              src={images}
              alt={title}
              thumbnail
              className="max-w-36 justify-center align-middle text-center rounded mx-auto d-block"
            />
          </Col>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">$ {price}</Card.Subtitle>
          {/* <Card.Text className="text-justify text-xs mb-4">
            {description}
          </Card.Text> */}
          {/* <div className="gap-4">
            <Button variant="primary">Add to Cart</Button>
            <Button variant="primary" onClick={handleNavigate}>
              Details
            </Button>
          </div> */}
          <Card.Link
            href="#"
            onClick={isInCart ? onRemoveFromCart : onAddToCart}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </Card.Link>
          <Card.Link href="#" onClick={handleNavigate}>
            Details
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default CardContent;
