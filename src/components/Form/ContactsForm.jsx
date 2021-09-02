import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Formik, ErrorMessage } from "formik";
import { addContactValidationSchema } from "utils/YupValidationSchemes";
import { addContact, getFiltredContactsList } from "redux/contacts";
import {
  FormStyled,
  FieldStyled,
  Button,
  Label,
  ValidationMessage,
} from "styles/common.styled";
import toast from "react-hot-toast";

function ContactsForm() {
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  const handleAddContactOnSubmit = (newContact) => {
    if (contacts.some(({ name }) => name === newContact.name)) {
      toast.error(`Contact ${newContact.name} already exists`);
      return;
    }

    dispatch(addContact(newContact));
    toast.success(`Contact ${newContact.name} created`);
  };

  let nameInputId = nanoid(3);
  let phoneInputId = nanoid(3);

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={addContactValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { name, number } = values;
        handleAddContactOnSubmit({ name, number });
        resetForm();
      }}
    >
      <FormStyled autoComplete="off">
        <Label htmlFor={`id-${nameInputId}`}>Name</Label>
        <FieldStyled
          id={`id-${nameInputId}`}
          type="text"
          name="name"
          placeholder="Name"
        />
        <ErrorMessage name="name" component={ValidationMessage} />

        <Label htmlFor={`id-${phoneInputId}`}>Number</Label>
        <FieldStyled
          id={`id-${phoneInputId}`}
          type="tel"
          name="number"
          placeholder="+38 (XXX) XXX-XX-XX"
        />
        <ErrorMessage name="number" component={ValidationMessage} />

        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
}

export default ContactsForm;
