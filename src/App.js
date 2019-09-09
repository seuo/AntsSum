import React, {Component} from 'react';

import Products from './Products';
import RouteAddProduct from './RouteAddProduct';
import RouteUserProductList from './RouteUserProductList';
import RouteUserProfile from './RouteUserProfile';
import RouteProducts from './RouteProducts';
import RouteLogin from './RouteLogin';
import RouteReviews from './RouteReview';
import {getTypes, getSingleUser} from './API';

import {Router, Link, navigate} from '@reach/router';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    Accordion,
    Card,
    Button,
    Nav,
    Navbar,
    Image,
    FormControl,
    InputGroup
} from 'react-bootstrap';
import './App.css';
import Modal from 'react-awesome-modal';
import 'react-multi-carousel/lib/styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            types:[],
            currentUser: null
        };
    }

    openModal() {
        this.setState({visible: true});
    }

    closeModal() {
        this.setState({visible: false});
    }


    setCurrentUser = (user) => {
        this.setState({currentUser:user})
        }
    
      handleLogoutClick = () => {
        localStorage.removeItem('userId')
        this.setState({currentUser:null})
        navigate('/home')
      }
      componentDidMount(){
        getTypes().then(res => this.setState({types:res.data}))
    
        //local storage
        var userId = localStorage.getItem('userId')
    
        if(userId){
          getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
        }
      }

    render() {
        var {types, currentUser} = this.state
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
                    <RouteLogin/>

                    </div>
                </Modal>

                <div className="Header">
                {
              currentUser? (<span>Welcome {currentUser.name}</span>) : null
            }
                    <Navbar
                        className="Navbar"
                        collapseOnSelect="collapseOnSelect"
                        expand="lg"
                        bg="dark"
                        variant="dark">
                        <Link to="/home"><Image className="Logo" src={require('./logo.png')} fluid="fluid"/></Link>
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
                                 </InputGroup>
                                 <input
                                                                                        className="loginButton"
                                                                                        type="button"
                                                                                        value="Login"
                                                                                        onClick={() => this.openModal()}/>
                                 <Navbar.Toggle className="userControl" aria-controls="responsive-navbar-nav"/>

                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/sell">+ Sell an Item</Nav.Link>
                                        <Nav.Link href="/user-profile">User Profile</Nav.Link>
                                        <Nav.Link href="/my-products">My Products</Nav.Link>
                                        <Nav.Link href="#watchlist">Watch List</Nav.Link>
                                        <Nav.Link href="/my-reviews">My Reviews</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                               
                                {/* {
                                    currentUser ? (
                                    <>
                                    
                                    <Navbar.Toggle className="userControl" aria-controls="responsive-navbar-nav"/>

                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="mr-auto">
                                            <Nav.Link href="#sell">+ Sell an Item</Nav.Link>
                                            <Nav.Link href="#userprofile">User Profile</Nav.Link>
                                            <Nav.Link href="#watchlist">Watch List</Nav.Link>
                                            <Nav.Link href="#reviews">My Reviews</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                    </>
                                    ) : (
                                    <>
                    <input
                                                        className="loginButton"
                                                        type="button"
                                                        value="Login"
                                                        onClick={() => this.openModal()}/>
                                    </>
                                    )
                                } */}


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
                                            <Nav.Link eventKey="cat-1">NEW ITEMS</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-2">Suits</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-3">Footwear</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-4">Clothing</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-5">Outdoors</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-6">Active Wear</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-7">Accessories</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cat-8">Mobile Phones</Nav.Link>
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

                  


                <Router>
                    <Products path="/home"/>
                    <RouteAddProduct path="/sell"/>
                    <RouteUserProductList path="/my-products"/>
                    <RouteProducts path="/products" />
                    <RouteLogin setCurrentUser={this.setCurrentUser} path="/home" />
                    <RouteReviews path="/my-reviews" />
                    <RouteUserProfile path="/user-profile" />
                </Router>

                </div>
            </div>
        );
    }
}
export default App;
