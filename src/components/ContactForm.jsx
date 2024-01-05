import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel } from './styled';
import { Button, TextField } from '@mui/material';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const uniqueId = nanoid();
    this.props.onContactSubmit({
      id: uniqueId,
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.onFormSubmit}>
          <StyledLabel>
            <TextField
              type="text"
              placeholder="Enter the name"
              name="name"
              required
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </StyledLabel>
          <StyledLabel>
            <TextField
              type="tel"
              placeholder="Enter the number"
              name="number"
              required
              value={this.state.number}
              onChange={this.onInputChange}
            />
          </StyledLabel>
          <Button type="submit" variant="contained" color="primary">
            Add contact
          </Button>
        </StyledForm>
      </div>
    );
  }
}
