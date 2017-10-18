const initialState = {
    users: [],
    items: [],
    errorMsg: [],
    isLoading: false,
    filteredItems: []
}

const mergeUsersItems = ( users, items ) => {
    // console.log(users)
    // return users
    return users.map( user => {
        return {
            ...user,
            items: items.filter( item => item.itemOwner === user.id )
        }
    })
}

const mergeItemsUsers = ( users, items ) => {
    // console.log(items)
    // return items
    return items.map( item => {
        return {
            ...item,
            // user: users.filter( user => item.itemOwner === user.id )
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
                items: mergeItemsUsers(action.users, action.items),
                isLoading: false,
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