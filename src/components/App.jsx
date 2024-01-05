import React, { Component } from 'react';
import { StyledContainer } from './styled';
import { Typography } from '@mui/material';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onContactSubmit = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <StyledContainer maxWidth="md">
        <Typography variant="h1" align="center" gutterBottom>
          Phonebook
        </Typography>
        <ContactForm
          contacts={this.state.contacts}
          onContactSubmit={this.onContactSubmit}
        />
        <Typography variant="h2" align="center" gutterBottom>
          Contacts
        </Typography>
        <Filter value={filter} onChange={this.onInputChange} />
        <ContactList contacts={filteredContacts} />
      </StyledContainer>
    );
  }
}
