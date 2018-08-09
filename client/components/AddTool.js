import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AddTool extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      category: '',
      price: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
  }

  render() {
    return (
      <Form className="form" onChange={this.handleChange(event)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" placeholder="Enter Product Name" />
        </FormGroup>
        <FormGroup>
          <Label for="Description">Description</Label>
          <Input type="textarea" name="description" />
        </FormGroup>
        <FormGroup>
          <Label for="Category">Category</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>General</option>
            <option>Wood Work</option>
            <option>Farm Work</option>
            <option>Carpentry</option>
            <option>Metal Work</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="Price">Price</Label>
          <Input type="text" name="price" placeholder="Enter Product Price" />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image" placeholder="Enter Product image" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
