import React, {Component} from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';

class RouteReviews extends Component {
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
                <h3>My Reviews</h3>
            </div>
    <div className="Item userItem">
        <Card
            style={{
                width: '18rem'
            }}>
            <Card.Img variant="top" src="/item1.png"/>
            <Card.Body>
                <Card.Title>Item 1<span className="itemSold">SOLD</span>
                </Card.Title>
                <Card.Text></Card.Text>
                <ListGroup variant="flush">

                    <ListGroup.Item>
                        <span className="itemPrice">$235.00</span>
                    </ListGroup.Item>
                    <ListGroup.Item><span class="rating">★★★★★</span></ListGroup.Item>
                    <ListGroup.Item><span class="comments">Comments: Very Good Trade A++ Sneakers perfect size and come as described!</span></ListGroup.Item>

                </ListGroup>

            </Card.Body>
        </Card>
    </div>
</div>
        )
    }
}

export default RouteReviews;