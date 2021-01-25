const contactData = require("./contactsData.js");
const getContactsByAlphabets = (letter) =>
  contactData.filter((contact) => contact.name.includes(letter));

module.exports = getContactsByAlphabets;
