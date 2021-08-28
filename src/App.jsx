import Container from "components/Container/Container";
import Section from "components/Section/Section";
import ContactsForm from "components/Form/ContactsForm";
import ContactsList from "components/Contacts/ContactsList";
import Filter from "components/Filter/Filter";
import Toast from "components/Toast/Toast";

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
      <Toast />
    </Container>
  );
}

export default App;
