import React, {Component} from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';

class UserProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    render() {

        return (
            <div className="ProductList">
                        <div className="Item carousel-container">
                            <h3>My Products</h3>
                        </div>
                <div className="Item userItem">
                    <Card
                        style={{
                            width: '18rem'
                        }}>
                        <Card.Img variant="top" src="/item1.png"/>
                        <Card.Body>
                            <Card.Title>Item 1<Button variant="outline-dark">
                                    <i class="far fa-heart"></i>
                                </Button>
                            </Card.Title>
                            <Card.Text></Card.Text>
                            <ListGroup variant="flush">

                                <ListGroup.Item>
                                    <span className="itemPrice">$235.00</span>
                                </ListGroup.Item>
                                <ListGroup.Item>Remove Listing</ListGroup.Item>

                            </ListGroup>

                        </Card.Body>
                    </Card>
                </div>
                <div className="Item userItem">
                    <Card
                        style={{
                            width: '18rem'
                        }}>
                        <Card.Img variant="top" src="/item2.png"/>
                        <Card.Body>
                            <Card.Title>Item 2<Button variant="outline-dark">
                                    <i class="far fa-heart"></i>
                                </Button>
                            </Card.Title>
                            <Card.Text></Card.Text>

                            <ListGroup variant="flush">

                                <ListGroup.Item>
                                    <span className="itemPrice">$235.00</span>
                                </ListGroup.Item>
                                <ListGroup.Item>Remove Listing</ListGroup.Item>

                            </ListGroup>

                        </Card.Body>
                    </Card>
                </div>
                <div className="Item userItem">
                    <Card
                        style={{
                            width: '18rem'
                        }}>
                        <Card.Img variant="top" src="/item3.png"/>
                        <Card.Body>
                            <Card.Title>Item 3<Button variant="outline-dark">
                                    <i class="far fa-heart"></i>
                                </Button>
                            </Card.Title>
                            <Card.Text></Card.Text>

                            <ListGroup variant="flush">

                                <ListGroup.Item>
                                    <span className="itemPrice">$235.00</span>
                                </ListGroup.Item>
                                <ListGroup.Item>Remove Listing</ListGroup.Item>

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
                <div className="Item userItem">
                    <Card
                        style={{
                            width: '18rem'
                        }}>
                        <Card.Img variant="top" src="/item4.png"/>
                        <Card.Body>
                            <Card.Title>Item 4<Button variant="outline-dark">
                                    <i class="far fa-heart"></i>
                                </Button>
                            </Card.Title>
                            <Card.Text></Card.Text>

                            <ListGroup variant="flush">

                                <ListGroup.Item>
                                    <span className="itemPrice">$235.00</span>
                                </ListGroup.Item>
                                <ListGroup.Item>Remove Listing</ListGroup.Item>

                            </ListGroup>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default UserProductList;