import React, {Component} from 'react';
import {navigate} from '@reach/router'
import {authenticate} from './API';
import {
  Col,
  Accordion,
  Card,
  Button,
  Form,
  ToggleButton,
  ToggleButtonGroup,
  Nav,
  Navbar,
  Image,
  FormControl,
  InputGroup
} from 'react-bootstrap';

class EditProduct extends Component {

  constructor(props){
    super(props);
    this.state = {
      message:''
    }
  }
  

  render(){
    return (
        <Form className="productForm">
        <h3>Edit your product</h3>
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
        <Form.Group controlId="formGridFile">
            <Form.Control type="file" placeholder="Upload Image"/>
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
    );
  }
}

export default EditProduct;
