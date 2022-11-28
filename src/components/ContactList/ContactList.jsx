import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export const ContactList = () => {
  const [parent] = useAutoAnimate();
  return (
    <List ref={parent}>
      <ContactListItem />
    </List>
  );
};
