import { mainURL } from '../constants'
import { getUsers } from '../actions/userActions'


const getCardItemsBegin = () => {
    return {
        type: 'GET_CARD_ITEMS_BEGIN'
    }
}

const getCardItemsSuccess = (items, users) => {
    return {
        type: 'GET_CARD_ITEMS_SUCCESS', 
        users,
        items
    }
}

const getCardItemsError = (error) => {
    return {
        type: 'GET_CARD_ITEMS_ERROR', 
        error
    }
}

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