import React from 'react';
import { StyledList, StyledListItem } from './styled';

const ContactList = ({ contacts }) => (
  <StyledList>
    {contacts.map(({ id, name, number }) => (
      <StyledListItem key={id}>
        {name}: {number}
      </StyledListItem>
    ))}
  </StyledList>
);

export default ContactList;
