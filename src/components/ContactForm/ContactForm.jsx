import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  NameInput,
  Form,
  NameLabel,
  AddContactBtn,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
  };

  nameId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    this.props.getData(this.state);
    this.reset();
  };

  handleInputChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <NameLabel htmlFor={this.nameId}>Name</NameLabel>
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
          id={this.nameId}
        ></NameInput>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    );
  }
}

export default ContactForm;
