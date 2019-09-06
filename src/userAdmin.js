import React, {Component} from 'react';
import {Col, Button,ToggleButton,ToggleButtonGroup, Dropdown, Form} from 'react-bootstrap';

class UserAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    render() {

        return (
            <Form className="productForm">
                <h3>List your product</h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">

                        <Form.Control type="text" placeholder="Name of product"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">

                        <Form.Control type="currency" placeholder="Price"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridDescription">
                    <Form.Control type="text" placeholder="Description"/>
                </Form.Group>

                <Form.Group controlId="formGridCondition">
                <ToggleButtonGroup type="radio" name="options" required="true">
                    <ToggleButton value={1}>Average</ToggleButton>
                    <ToggleButton value={2}>Good</ToggleButton>
                    <ToggleButton value={3}>Very Good</ToggleButton>
                    <ToggleButton value={4}>Unboxed</ToggleButton>
                    
                    </ToggleButtonGroup>
                </Form.Group>

                <Button variant="primary" type="submit">
                    List Product
                </Button>
            </Form>
        )
    }
}

export default UserAdmin;