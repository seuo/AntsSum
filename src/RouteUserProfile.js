import React, {Component} from 'react';
import {Col, Button,ToggleButton,ToggleButtonGroup, Dropdown, Form} from 'react-bootstrap';

class RouteUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    render() {

        return (
           
                    <Form className="loginForm">
      
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
      
                                <Form.Control type="email" placeholder="Change email"/>
                            </Form.Group>
      
                            <Form.Group as={Col} controlId="formGridPassword">
      
                                <Form.Control type="password" placeholder="Reset Password"/>
                            </Form.Group>
                        </Form.Row>
      
                        <Form.Group controlId="formGridAddress1">
      
                            <Form.Control placeholder="Change Address"/>
                        </Form.Group>
      
                        <Form.Group controlId="formGridAddress2">
      
                            <Form.Control placeholder="Apartment, studio, or floor"/>
                        </Form.Group>
      
                        <Form.Group controlId="formGridCity">
      
                            <Form.Control placeholder="Change City"/>
                        </Form.Group>
      
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>

        )
    }
}

export default RouteUserProfile;