import React, { Component } from 'react';
import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { initialContacts } from 'utilities';

export class App extends Component {
  state = {
    contacts: [...initialContacts],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return filter
      ? contacts.filter(contact =>
          contact.name
            .toLowerCase()
            .split(' ')
            .some(element => element.startsWith(normalizedFilter))
        )
      : contacts;
  };

  isContactExist = name => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return true;
    }
    return false;
  };

  render() {
    const { filter } = this.state;
    return (
      <Application>
        <PageTitle title="React homework #02 - phonebook" />

        <Section title="Phonebook">
          <AddContactForm
            onSubmit={this.addContact}
            checkContact={this.isContactExist}
          />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onFilter={this.setFilter} />
          <ContactList
            contacts={this.getFilteredContacts()}
            removeItem={this.removeContact}
          />
        </Section>

        <Footer
          name="Stanislav Zabiyaka"
          href="https://github.com/stzabiyaka/"
        />
      </Application>
    );
  }
}
