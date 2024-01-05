import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
    this.setState(prevState => ({
      contacts: [
        { id: uniqueId, name: prevState.name, number: prevState.number },
        ...prevState.contacts,
      ],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              required
              value={this.state.number}
              onChange={this.onInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <h3>Fined contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.onInputChange}
        />
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
