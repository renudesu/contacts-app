

export const contactReducer = (state = { contacts: [], searchKey: '', searchedContact: [] }, action) => {
    switch (action.type) {
        case 'PERSON_CONTACT':
            const contacts = state.contacts;
            contacts.push(action.payload)
            return Object.assign({}, state, { contacts: contacts });
        case 'SEARCH_CONTACT':
            // const searchedContact = state.contacts;
            const filteredContacts = this.state.contacts.filter((item) => {
                return item.fullName.toLowerCase().search(this.state.searchKey.toLowerCase()) > -1;
            })
            filteredContacts.push(action.payload)
            return Object.assign({}, state, { searchedContact: filteredContacts })
        

        default:
            return state;
    }
}
