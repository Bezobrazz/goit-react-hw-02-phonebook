import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel } from './styled';
import { Button, TextField } from '@mui/material';
import { Notify } from 'notiflix';

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
    const { name, number } = this.state;
    const isNameAlreadyExist = this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameAlreadyExist) {
      Notify.failure(
        `Contact with name '${name}' already exists in the phonebook.`
      );
    } else {
      const uniqueId = nanoid();
      this.props.onContactSubmit({
        id: uniqueId,
        name,
        number,
      });
      this.setState({ name: '', number: '' });
    }
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
