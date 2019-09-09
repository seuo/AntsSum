import React, {Component} from 'react';
import {Router, Link, navigate} from '@reach/router';
import RouteProduct from './RouteProduct';
import {
    Card,
    Button,
} from 'react-bootstrap';


class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
           
            <div className="Item">
                <Card
                    style={{
                        width: '18rem'
                    }}>
                    <Card.Img variant="top" src="/item4.png"/>
                    <Card.Body>
                        <Card.Title>Product 1<Button variant="outline-dark">
                                <i class="far fa-heart"></i>
                            </Button>
                        </Card.Title>
                        <Card.Text></Card.Text>
                        <Button className="AddButton" variant="primary">Add to Cart
                            <span className="itemPrice">$235.00</span>
                        </Button>
                    </Card.Body>
                </Card>

                <Router>
                    <RouteProduct path="/product"/>
                </Router>
                
            </div>

        )
    }
}

export default Product;

 