import { mainURL } from '../../constants'
import { getUsers } from '../modules/user'

/**
 * NO NEED FOR ERRORMSG OR LOADING PROPERTIES AS APOLLO 
 * CLIENT HAS THEIR OWN.
 */
// INITIAL STATE 
const initialState = {
    filteredItems: []
}

// ACTIONS
const GET_CARD_ITEMS_BEGIN = 'GET_CARD_ITEMS_BEGIN'
const GET_CARD_ITEMS_SUCCESS = 'GET_CARD_ITEMS_SUCCESS'
const GET_CARD_ITEMS_ERROR = 'GET_CARD_ITEMS_ERROR'

// ACTION CREATORS
export const getCardItemsBegin = () => {
    return {
        type: GET_CARD_ITEMS_BEGIN
    }
}
export const getCardItemsSuccess = (items) => {
    return {
        type: GET_CARD_ITEMS_SUCCESS, 
        items
    }
}
export const getCardItemsError = (error) => {
    return {
        type: GET_CARD_ITEMS_ERROR, 
        error
    }
}


// REDUCER
export default ( state = initialState, action ) => {
    switch (action.type) {
        case GET_CARD_ITEMS_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case GET_CARD_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case GET_CARD_ITEMS_ERROR:
            return {
                ...state,
                errorMsg: action.error,
                isLoading: false
            }
        default:
            return state
    }
}

// ASYNCHRONOUS FETCH
//
export const getCardItems = () => {
    return async (dispatch) => {
        dispatch(getCardItemsBegin())
        try {
            const items = await fetch(`${mainURL}/items`);
            const users = await getUsers(dispatch)
            const itemData = await items.json()


            dispatch(getCardItemsSuccess(itemData, users))
        } catch(e) {
            dispatch(getCardItemsError(e))
        } 
               
    }
}



/////////////////////////////////////
// 
// OLD CODE FOR REFERENCE
//
//
//
//  return fetch(`${mainURL}/items`)
// .then(resp => resp.json())
// .then(items => {
//     return getUsers(dispatch).then( users => {
//         dispatch(getCardItemsSuccess(items, users))
//     })
// })
// .catch(error => {
//     dispatch(getCardItemsError(error))
// })
// 
