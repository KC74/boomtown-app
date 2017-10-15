
const initialState = {
    users: [],
    items: [],
    errorMsg: [],
    isLoading: false,
    filteredItems: []
}

const mergeUsersItems = ( users, items ) => {
    return users.map( user => {
        return {
            ...user,
            items: items.filter( item => item.itemOwner === user.id )
        }
    })
}

const getAllItems = (items) => {
    return items.map( item => {
        return {
            ...item,
        }
    })
}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case 'GET_CARD_ITEMS_BEGIN':
        case 'GET_USERS_BEGIN':
            return {
                ...state,
                isLoading: true,
            }
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
            }
        case 'GET_CARD_ITEMS_SUCCESS':
            return {
                ...state,
                users: mergeUsersItems(action.users, action.items),
                items: getAllItems(action.items),
                isLoading: false
            }
        case 'GET_USERS_ERROR':
        case 'GET_CARD_ITEMS_ERROR':
            return {
                ...state,
                errorMsg: action.error,
                isLoading: false
            }
        default:
            return state
    }
}