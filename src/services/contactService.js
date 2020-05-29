class Contact {
    _contacts = [];
    _selectedContact = {};
    addContacts(value) {
        this._contacts.push(value);
    }
    getContacts() {
        return this._contacts;
    }

    selectedContact(value) {
        this._selectedContact = value;
    }
    getSelectedContact() {
        return this._selectedContact;
    }

}

const contact = new Contact();

export default contact;