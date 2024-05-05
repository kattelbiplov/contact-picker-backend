// routes/contacts.js

const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

// Route to store contacts
router.post('/contacts', async (req, res) => {
    try {
        const { contacts } = req.body;
        await Contact.insertMany(contacts);
        res.status(201).json({ message: 'Contacts stored successfully' });
    } catch (error) {
        console.error('Error storing contacts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
