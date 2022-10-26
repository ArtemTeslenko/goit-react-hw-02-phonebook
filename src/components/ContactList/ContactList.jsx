import PropTypes from 'prop-types';
import React from 'react';
import { ContactItem, List } from './ContactList.styled';

export default function ContactList({ contacts }) {
  return (
    <List>
      {contacts.map(item => {
        const { id, name, number } = item;
        return (
          <ContactItem key={id}>
            {name}: {number}
          </ContactItem>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
