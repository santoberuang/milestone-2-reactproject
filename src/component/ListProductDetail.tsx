/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

interface ListProductDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}
const ListProductDetail: React.FC<ListProductDetail> = ({
  id,
  title,
  description,
  price,
  images,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/product/${id}");

  return (
    <div className="flex direction-column margin-left-10 top-20">
      {/* <h1>List Product Detail</h1> */}
      <Container>
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
            <Card.Text className="text-justify text-xs mb-4">
              {description}
            </Card.Text>
            <Button variant="primary" onClick={handleNavigate}>
              Details
            </Button>

            {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ListProductDetail;
