import React from "react";
// import products from "../products";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { useNavigate, Link } from "react-router-dom";

const Product = ({ product }) => {
  const Navigate = useNavigate();
  return (
    <>
      <Card className="Card" style={{ width: "18rem" }} class="card">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            variant="top"
            src={product.image}
            className="ImageCard"
            onClick={() => Navigate("/product/" + product._id)}
          />
        </Link>

        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            className="TitleText"
            class="card-title"
          >
            <Card.Title as="h6">{product.name}</Card.Title>
          </Link>
          <Rating
            value={product.rating}
            text={product.numReviews}
            color={"gold"}
          />
          {/* <Card.Text> {product.numReviews} reviews</Card.Text> */}
          <Card.Text as="h3">${product.price}</Card.Text>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
