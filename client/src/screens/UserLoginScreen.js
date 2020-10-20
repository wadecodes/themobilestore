import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { loginUserStart } from '../actions/userAuthAction';

const UserLoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = location.search ? location.search.split('=') : '/';

  const userLogin = useSelector((state) => state.userAuth);
  const { loading, error, loggedIn } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      history.push(redirect);
    }
  }, [history, loggedIn, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(loginUserStart(email, password));
  };

  return (
    <>
      <h1>Sign In</h1>
      {loading ? (
        <Loader />
      ) : (
        <FormContainer>
          {error ? <Message variant="danger">{error}</Message> : null}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Sign In
            </Button>
            <Row className="py-3">
              <Col>
                New Customer?{' '}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : `/register`}
                >
                  Register
                </Link>
              </Col>
            </Row>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default UserLoginScreen;
