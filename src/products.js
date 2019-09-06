import React, {Component} from 'react';
import {
    Card,
    Button,
} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 5,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 100 // this is needed to tell the amount of px that should be visible.
    }
}

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
        <div className="Products">
        <div className="Item">
            <h3>Footwear</h3>
        </div>
        <Carousel swipeable={true} draggable={true} showDots={true} responsive={responsive} ssr={true}
            // means to render carousel on server-side.
            infinite={true} autoPlay={this.props.deviceType !== "mobile"
                ? false
                : false} autoPlaySpeed={1000} keyBoardControl={true} customTransition="ease all 1s" transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={this.props.deviceType} dotListClass="custom-dot-list-style" itemClass="CarousalItem carousel-item-padding-40-px" partialVisbile={true}>
            <div className="Item">
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
                        <Button className="AddButton" variant="primary">Add to Cart
                            <span className="itemPrice">$235.00</span>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="Item">
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
                        <Button className="AddButton" variant="primary">Add to Cart
                            <span className="itemPrice">$235.00</span>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="Item">
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
                        <Button className="AddButton" variant="primary">Add to Cart
                            <span className="itemPrice">$235.00</span>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="Item">
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
                        <Button className="AddButton" variant="primary">Add to Cart
                            <span className="itemPrice">$235.00</span>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </Carousel>
        </div>
        )
    }
}

export default Products;

 