import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart } from '../actions/productAction';

import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductStart(match.params.productId));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.productId}?qty=${qty}`);
  };

  const MainComponent = () => (
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </ListGroup.Item>

          <ListGroup.Item>Price : ${product.price}</ListGroup.Item>

          <ListGroup.Item>Description : ${product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  {' '}
                  <strong>{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {' '}
                  <strong>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>

            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[
                        ...Array(
                          product.countInStock < 10 ? product.countInStock : 10
                        ).keys(),
                      ].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}

            <ListGroup.Item>
              <Button
                onClick={addToCartHandler}
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                {product.countInStock > 0 ? 'Add To Cart' : 'Out of Stock'}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <MainComponent />
      )}
    </>
  );
};

export default ProductScreen;
