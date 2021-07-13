import React from 'react';

import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import { Row, Col } from 'reactstrap';

import * as yup from 'yup';
import { Formik } from 'formik';

// import 'core-js/es6/promise';
// import 'core-js/es6/set';
// import 'core-js/es6/map';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

let e = React.createElement;

// const { Formik } = formik;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  cardNum: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

export default class Upgrade extends React.Component {
    render() {

        return (
            <div className="container">
                You could call us Pok"EA"mon Team Maker
            <div>

            <div>
                <h3>You might be asking what dose Pro get you?</h3>
                <h3>Well i can tell you it will gift you one free random shiny egg every year</h3>
                <h6>and with only over 300 pokemon you might get the one you want before you get sick of this game</h6>
            </div>

    

                <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    cardNum: '',
                    city: '',
                    state: '',
                    zip: '',
                    terms: false,
                }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormikcardNum">
                        <Form.Label>Card Number</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            type="text"
                            placeholder="Card Number Here"
                            aria-describedby="inputGroupPrepend"
                            name="Card Number"
                            value={values.cardNum}
                            onChange={handleChange}
                            isInvalid={!!errors.cardNum}
                            />
                            <Form.Control.Feedback type="invalid">
                            {errors.cardNum}
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>

                        

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            isInvalid={!!errors.city}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.city}
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            isInvalid={!!errors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.state}
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            name="zip"
                            value={values.zip}
                            onChange={handleChange}
                            isInvalid={!!errors.zip}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.zip}
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Check
                        required
                        name="terms"
                        label="Save Card Information"
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        id="validationFormik0"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                    </Form>
                )}
                </Formik>

                </div>
            </div>
        )
    }
}