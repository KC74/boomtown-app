const initialState = {
    users: [],
    items: [],
    errorMsg: [],
    isLoading: false,
    filteredItems: []
}

// ACTIONS
// const GET_CARD_ITEMS_BEGIN = 'GET_CARD_ITEMS_BEGIN'
// const GET_CARD_ITEMS_SUCCESS = 'GET_CARD_ITEMS_SUCCESS'
// const GET_CARD_ITEMS_ERROR = 'GET_CARD_ITEMS_ERROR'

// const GET_USERS_BEGIN = 'GET_USERS_BEGIN';
// const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
// const GET_USERS_ERROR = 'GET_USERS_ERROR';


// ACTION CREATORS
// const getCardItemsBegin = () => {
//     return {
//         type: 'GET_CARD_ITEMS_BEGIN'
//     }
// }
// const getCardItemsSuccess = (items) => {
//     return {
//         type: 'GET_CARD_ITEMS_SUCCESS', 
//         items
//     }
// }
// const getCardItemsError = (error) => {
//     return {
//         type: 'GET_CARD_ITEMS_ERROR', 
//         error
//     }
// }

// const getUsersBegin = () => {
//     return {
//         type: 'GET_USERS_BEGIN'
//     }
// }

// const getUsersSuccess = (users) => {
//     return {
//         type: 'GET_USERS_SUCCESS',
//         users
//     }
// }

// const getUsersError = (error) => {
//     return {
//         type: 'GET_USERS_ERROR',
//         error
//     }
// }

const mergeUsersItems = ( users, items ) => {
    return users.map( user => {
        return {
            ...user,
            items: items.filter( item => item.itemowner === user.id )
        }
    })
}

const mergeItemsUsers = ( users, items ) => {
    return items.map( item => {
        return {
            ...item,
            user: users.filter( user => item.itemowner === user.id )
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