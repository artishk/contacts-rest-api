const contactData = require('./contactsData.js');

const updateContactByID = (newContactObject, id) => {
  const contactToUpdate = contactData.splice(
    contactData.findIndex((contact) => contact.ID === id),
    1,
    newContactObject,
  );

  return 'contact details Updated...';
};

module.exports = updateContactByID;
