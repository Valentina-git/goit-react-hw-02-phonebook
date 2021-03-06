import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './contactListItem/ContactListItem';
import ContactListWrapper from './StyledContactList';

const ContactList = ({ contacts, filter, onBtnClick }) => {
  return (
    <>
      <ContactListWrapper>
        <ul className="list">
          {contacts
            .filter(item =>
              item.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map(item => (
              <ContactListItem
                item={item}
                key={item.id}
                onBtnClick={onBtnClick}
              />
            ))}
        </ul>
      </ContactListWrapper>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onBtnClick: PropTypes.func.isRequired,
};
export default ContactList;
