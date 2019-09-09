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


class RouteProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="productDetails">
             <Carousel swipeable={true} draggable={true} showDots={true} responsive={responsive} ssr={true}
            // means to render carousel on server-side.
            infinite={true} autoPlay={this.props.deviceType !== "mobile"
                ? false
                : false} autoPlaySpeed={1000} keyBoardControl={true} customTransition="ease all 1s" transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={this.props.deviceType} dotListClass="custom-dot-list-style" itemClass="CarousalItem carousel-item-padding-40-px" partialVisbile={true}>
                    <Card.Img variant="top" src="/item4.png"/>
                    <Card.Img variant="top" src="/item1.png"/>
                    <Card.Img variant="top" src="/item3.png"/>

            </Carousel>
            <div className="Item">
                <Card
                    style={{
                        width: '18rem'
                    }}>
                    <Card.Body>
                        <Card.Title>Item 4<Button variant="outline-dark">
                                <i class="far fa-heart"></i>
                            </Button>
                        </Card.Title>
                        <Card.Text><span className="productDescription">Nulla elit quam, dignissim et odio non, egestas blandit nunc. Fusce laoreet eget lacus in ornare. Sed tincidunt, ante sagittis volutpat dapibus, leo leo elementum nulla, eget mattis arcu felis ut sem. Sed scelerisque augue turpis, ac rhoncus nisi dignissim eget. Proin quis turpis lectus. Curabitur accumsan pulvinar eleifend. Morbi sodales neque urna, non vestibulum felis imperdiet non.
                        </span></Card.Text>
                        <Button className="AddButton" variant="primary">Add to Cart
                            <span className="itemPrice">$235.00</span>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            </div>
        )
    }
}

export default RouteProduct;

 