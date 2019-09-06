import React, {Component} from 'react';
import Products from './products';
import UserAdmin from './userAdmin';
import UserProductList from './userProductList';

import {Router, Link, navigate} from '@reach/router';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    Col,
    Accordion,
    Card,
    Button,
    Form,
    Nav,
    Navbar,
    Image,
    FormControl,
    InputGroup
} from 'react-bootstrap';
import './App.css';
import Modal from 'react-awesome-modal';

import 'react-multi-carousel/lib/styles.css';
import RouteLogin from './RouteLogin';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    openModal() {
        this.setState({visible: true});
    }

    closeModal() {
        this.setState({visible: false});
    }

    render() {

        return (
            <div className="wrap">

                <Modal
                    visible={this.state.visible}
                    width="95%"
                    height="80%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}>
                    <div className="loginModal">

                        <span>
                            <h6>Login or Register to buy & sell</h6>
                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                                <i className="far fa-window-close"></i>
                            </a>
                        </span>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Login
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Form className="loginForm">

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Username"/>
                                            <Form.Text className="text-muted"></Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password"/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Login
                                        </Button>
                                    </Form>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Register
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Form className="loginForm">

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">

                                                <Form.Control type="email" placeholder="Enter email"/>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">

                                                <Form.Control type="password" placeholder="Password"/>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridAddress1">

                                            <Form.Control placeholder="Street Address"/>
                                        </Form.Group>

                                        <Form.Group controlId="formGridAddress2">

                                            <Form.Control placeholder="Apartment, studio, or floor"/>
                                        </Form.Group>

                                        <Form.Group controlId="formGridCity">

                                            <Form.Control placeholder="City"/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Register
                                        </Button>
                                    </Form>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </div>
                </Modal>

                <div className="Header">
                    <Navbar
                        className="Navbar"
                        collapseOnSelect="collapseOnSelect"
                        expand="lg"
                        bg="dark"
                        variant="dark">
                        <Image className="Logo" src={require('./logo.png')} fluid="fluid"/>
                        <div className="navBarbot">

                            <InputGroup className="searchBar">
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">
                                        <i className="fas fa-search"></i>
                                    </Button>
                                </InputGroup.Append>
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"/>
                                <input
                                    className="loginButton"
                                    type="button"
                                    value="Login"
                                    onClick={() => this.openModal()}/>
                            </InputGroup>
                            <Navbar.Toggle className="userControl" aria-controls="responsive-navbar-nav"/>

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#sell">+ Sell an Item</Nav.Link>
                                    <Nav.Link href="#userprofile">User Profile</Nav.Link>
                                    <Nav.Link href="#watchlist">Watch List</Nav.Link>
                                    <Nav.Link href="#reviews">My Reviews</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>

                        </div>
                    </Navbar>
                </div>
                <div className="section">

                    <div className="catagories">
                        <Accordion className="FilterCat">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <h5>BROWSE</h5>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Nav variant="pills" defaultActiveKey="/home">
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-1">Clothing & Fashion</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-2">Vehicles</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-3">Tech</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-4">Sport</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-5">Outdoors</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-6">Home & Garden</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-7">Baby Gear</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-8">Cooking</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-9">Toys</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-10">Books</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-11">Mobile Phones</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-12">Gaming</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-13">Music & Instruments</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-14">Random</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>

                  <Products/>
                  <UserAdmin/>
                  <UserProductList/>

                </div>
            </div>
        );
    }
}
export default App;
