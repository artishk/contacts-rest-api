const contactData = require("./contactsData.js");
const deleteContactByName = (name) => {
  const index = contactData.findIndex(
    (contact) => contact.name.toLocaleLowerCase() === name
  );
  contactData.splice(index, 1);
  return true;
};

module.exports = deleteContactByName;
