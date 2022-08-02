import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input } from '../Input/Input';
import { FormContainer } from './AddContactForm.styled';
import { Button } from 'utilities';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class AddContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (!this.props.checkContact(name)) {
      this.props.onSubmit({ id: nanoid(), name: name, number: number });
    }
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer autoComplete="off" onSubmit={this.handleSubmit}>
        <Input
          name="name"
          type="text"
          id={nanoid()}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required={true}
          onChange={this.handleChange}
        />
        <Input
          type="tel"
          name="number"
          id={nanoid()}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required={true}
          onChange={this.handleChange}
        />
        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  checkContact: PropTypes.func.isRequired,
};
