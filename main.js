const express = require('express');
const cors = require('cors');
const contactData = require('./contactsData');
const getAllContacts = require('./getAllContacts');
const getContactsByID = require('./getContactsByID');
const deleteContactByName = require('./deleteContactByName');
const updateContactByID = require('./updateContactByID');
const createNewContact = require('./createNewContact');
const getContactsByAlphabets = require('./getContactsByAlphabets');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/getAllContacts', (req, res) => {
  res.send(getAllContacts(contactData));
});
app.get('/getContactsByID/:id', (req, res) => {
  res.send(getContactsByID(req.params.id));
});
app.get('/getContactsByAlphabets/:alphabet', (req, res) => {
  res.send(getContactsByAlphabets(req.params.alphabet));
});
app.get('/deleteContactByName/:Name', (req, res) => {
  res.send(deleteContactByName(req.params.Name));
});

app.post('/updateContactByID/:userId', (req, res) => {
  res.send(updateContactByID(req.body, req.params.userId));
});

app.post('/createNewContact', (req, res) => {
  res.send(createNewContact(req.body));
});
app.listen(9190, () => {
  console.log('Server started on port 9190');
});
