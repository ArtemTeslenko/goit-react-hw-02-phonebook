import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [{ 0: 'qwe' }, { 1: 'qwe' }],
    filter: '',
  };

  handleFormData = data => {
    console.log(data);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data }],
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div className="mainContainer">
        <h1 className="header">Phonebook</h1>
        <ContactForm getData={this.handleFormData}></ContactForm>
        <h2>Contacts</h2>
        <ContactList></ContactList>
      </div>
    );
  }
}

export default App;
