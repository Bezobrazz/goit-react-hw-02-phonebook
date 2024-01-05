import React, { Component } from 'react';
import { StyledContainer } from './styled';
import { Typography } from '@mui/material';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Notify } from 'notiflix';

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

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    Notify.success('Contact deleted successfully.');
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <StyledContainer maxWidth="md">
        <Typography variant="h1" align="center" fontSize="60px" gutterBottom>
          Phonebook
        </Typography>
        <ContactForm
          contacts={this.state.contacts}
          onContactSubmit={this.onContactSubmit}
        />
        <Typography variant="h2" align="center" fontSize="40px" gutterBottom>
          Contacts
        </Typography>
        <Filter value={filter} onChange={this.onInputChange} />
        <ContactList
          onDeleteContact={this.onDeleteContact}
          contacts={filteredContacts}
        />
      </StyledContainer>
    );
  }
}
