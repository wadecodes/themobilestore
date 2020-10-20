import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

import Message from '../components/Message';
import Loader from '../components/Loader';
import { addItemToCartStart, clearItemFromCart } from '../actions/cartAction';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  const { cartItems, error, loading } = useSelector(({ cart }) => cart);

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  useEffect(() => {
    if (productId) {
      dispatch(addItemToCartStart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const MainComponent = () => (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty.<Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map(({ _id, image, name, price, qty, countInStock }) => {
              return (
                <ListGroup.Item key={_id}>
                  <Row>
                    <Col md={2}>
                      <Image src={image} alt={name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/products/${_id}`}>{name}</Link>
                    </Col>
                    <Col md={2}>${price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) =>
                          dispatch(
                            addItemToCartStart(_id, Number(e.target.value))
                          )
                        }
                      >
                        {[
                          ...Array(
                            countInStock < 10 ? countInStock : 10
                          ).keys(),
                        ].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => dispatch(clearItemFromCart(_id))}
                      >
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce(
                  (accumulator, cartItem) => accumulator + cartItem.qty,
                  0
                )}
                ) items
              </h2>
              ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );

  return (
    <>
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

export default CartScreen;
