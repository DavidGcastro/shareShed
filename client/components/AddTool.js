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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleSubmit(event) {
    console.log(event);
  }
  handleForm(event) {
    let value = event.target.value;
    this.setState({ [event.target.name]: value });
  }

  render() {
    return (
      <Form className="form" onChange={this.handleForm}>
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
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
