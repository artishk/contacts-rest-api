const contactData = require('./contactsData.js');

const addNewContact = (newContactObject) => {
  contactData.push(newContactObject);
  return true;
};

module.exports = addNewContact;
