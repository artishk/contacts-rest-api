const contactData = require("./contactsData.js");
const getContactsByID = (ID) =>
  contactData.find((contact) => contact.ID === ID);

module.exports = getContactsByID;
