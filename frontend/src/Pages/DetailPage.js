import React from "react";
import products from "../products";
// import { products } from "./HomePage";
import Rating from "../components/Rating";
import { useParams, Link } from "react-router-dom";
import "../bootstrap.min.css";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const DetailPage = ({ Product }) => {
  Product = products;
  console.log(Product);
  const { _id } = useParams();
  console.log(_id);

  return (
    <Container>
      <div>
        {Product.filter((prod) => prod._id === _id).map((prods) => {
          return (
            <>
              <Container>
                <button
                  type="button"
                  class="btn btn-secondary"
                  className="LightBTN"
                >
                  <strong>Go Back</strong>
                </button>
                <Row>
                  <Col md={6}>
                    <img src={prods.image} alt={prods.name} fluid />
                  </Col>

                  <Col md={3}>
                    <ListGroup className="ListGroup p-3">
                      <ListGroup.Item cla>
                        <h4>{prods.name}</h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {
                          <Rating
                            value={prods.rating}
                            text={`${prods.numReviews}`}
                          />
                        }
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Price : <strong>{prods.price}$</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>{prods.description}</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={3}>
                    <Card>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Row>
                            <Col>Price:</Col>
                            <Col>
                              <strong>${prods.price}</strong>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col>Status:</Col>
                            <Col>
                              {prods.countInStock > 0
                                ? "In Stock"
                                : "Out Of Stock"}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Button
                            className="btn btn-default btn-block"
                            type="button"
                            disabled={prods.countInStock === 0}
                          >
                            Add To Cart
                          </Button>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default DetailPage;
