
// here,in this reducer complete application state maintained here.
export const contactReducer = (state = { contacts: [], searchKey: '', itemsToDisplay: [] }, action) => {
    switch (action.type) {
        case 'PERSON_CONTACT':
            const contacts = state.contacts; // here we are placing state.contacts into "cotacts variable "
            //and  push contacts variable value into "action.payload". action.payload holds the contatcs values.
            contacts.push(action.payload)
            return Object.assign({}, state, { contacts: contacts, itemsToDisplay: contacts });
        case 'SEARCH_CONTACT':
            const filteredContacts = state.contacts.filter((item) => {
                //action.payload ::: value what we given in text field ,and filtering from state.contacts actually what we want to get.
                return item.fullName.toLowerCase().search(action.payload.toLowerCase()) > -1;
            })
            return Object.assign({}, state, { itemsToDisplay: filteredContacts })
        default:
            return state;
    }
}
