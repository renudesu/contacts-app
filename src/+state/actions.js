
export const addContactActions = (value) => {
    return {
        type: 'PERSON_CONTACT',
        payload: value
    }
}

export const searchContactAction = (value)=>{
    return {
        type:'SEARCH_CONTACT',
        payload:value
    }
}

