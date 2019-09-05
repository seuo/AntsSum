import React, {Component} from 'react';
import { Router, Link, navigate } from '@reach/router'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { fab } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-responsive-modal';
import { Media,Col,Dropdown,DropdownButton,ButtonToolbar,Carousel,Accordion,Card,Button,Form,Nav,NavDropdown,Navbar,Image,FormControl,InputGroup } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


render() {

  const { open } = this.state;

  return (
    <div className="wrap">
      <div className="Header">

        <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Image className="Logo" src={require('./logo.png')} fluid />
        
        <div className="navBarbot">

        <InputGroup className="searchBar">
        <InputGroup.Append>
          <Button variant="outline-secondary"><i class="fas fa-search"></i></Button>
        </InputGroup.Append>
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />

      </InputGroup>
          <Navbar.Toggle className="userControl" aria-controls="responsive-navbar-nav" />
          
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
                <div className="Items">
                  <h3>Footwear</h3>
                    <Carousel>
                      <Carousel.Item>
                            <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="/item4.png"/>
                          <Card.Body>
                            <Card.Title>Item 1</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button className="AddButton" variant="primary">Add to Cart <span className="itemPrice">$235.00</span></Button>
                          </Card.Body>
                        </Card>
                      </Carousel.Item>
                      <Carousel.Item>
                            <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="item2.png"/>
                          <Card.Body>
                            <Card.Title>Item 2</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button className="AddButton" variant="primary">Add to Cart <span className="itemPrice">$235.00</span></Button>
                          </Card.Body>
                        </Card>
                      </Carousel.Item>
                      <Carousel.Item>
                      <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="item5.png"/>
                    <Card.Body>
                      <Card.Title>Item 3</Card.Title>
                      <Card.Text>
                      </Card.Text>
                      <Button className="AddButton" variant="primary">Add to Cart <span className="itemPrice">$235.00</span></Button>
                    </Card.Body>
                  </Card>
                      </Carousel.Item>
                    </Carousel>
                </div>
      </div>
    </div>
  );
}
}
export default App;
