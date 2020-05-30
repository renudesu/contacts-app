
export const addContactActions = (value) => {
    return {
        type: 'PERSON_CONTACT',
        payload: value
    }
}

export const searchContactAction = (value)=>{
    console.log("search key",value)
    return {
        type:'SEARCH_CONTACT',
        payload:value // Reducer:(state,action)::::action.payload=>value
    }
}

