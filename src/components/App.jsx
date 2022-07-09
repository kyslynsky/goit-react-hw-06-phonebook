import { Component } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { Section } from './Section';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Container } from './Container';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const ifExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (ifExist) {
      Notify.failure(`${name} is already exist`, {
        clickToClose: true,
        distance: '20px',
        fontFamily: 'inherit',
      });
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim(' ');

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltredContacts();

    return (
      <>
        <Container>
          <div>
            <Section title="Phonebook">
              <ContactForm onSubmit={this.addContact} />
            </Section>
          
            <Section title="Contacts">
              <Filter filtredValue={filter} onSearch={this.changeFilter} />
              <ContactList
                data={filteredContacts}
                onDelete={this.deleteContact}
              />
            </Section>
          </div>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}
