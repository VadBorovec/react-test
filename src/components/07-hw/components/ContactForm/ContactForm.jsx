import { useState } from 'react';
import Notiflix from 'notiflix';
import { Button } from '../ui';
import { StyledForm, Label, Input } from './ContactForm.styled';

import { useCreateContactMutation } from '../../redux/contacts/contactsSlice';
import { Spinner } from '../Spinner';

export const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();

  const handleSubmit = e => {
    e.preventDefault();

    if (!contactName || !contactPhone) {
      Notiflix.Notify.warning('Please enter name and phone number');
      return;
    }

    createContact({
      contactName,
      contactPhone,
    });

    Notiflix.Notify.success(`${contactName} has been added to  your phonebook`);
    setContactName('');
    setContactPhone('');
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={contactName}
          onChange={e => setContactName(e.target.value)}
          placeholder="Enter name"
        />
      </Label>
      <Label htmlFor="phone">
        Number
        <Input
          type="text"
          name="phone"
          value={contactPhone}
          onChange={e => setContactPhone(e.target.value)}
          placeholder="Enter number"
        />
      </Label>
      <Button type="submit" disabled={isLoading}>
        {isLoading && <Spinner size={12} />}
        Add contact
      </Button>
    </StyledForm>
  );
};
