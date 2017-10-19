import { mainURL } from '../constants';

const getUsersBegin = () => {
    return {
        type: 'GET_USERS_BEGIN'
    }
}

const getUsersSuccess = (users) => {
    return {
        type: 'GET_USERS_SUCCESS',
        users
    }
}

const getUsersError = (error) => {
    return {
        type: 'GET_USERS_ERROR',
        error
    }
}

export const getUsers = async (dispatch) => {
    dispatch(getUsersBegin())
    try {
        const userData = await fetch(`${mainURL}/users`)
        const user = await userData.json()
        dispatch(getUsersSuccess())

        return user
    } catch (e) {
        dispatch(getUsersError(e))
    }
}

/////////////////////////////////////
// 
// OLD CODE FOR REFERENCE
//
// fetch(`${mainURL}/users`)
// .then(resp => {
//     dispatch(getUsersSuccess())
//     return resp.json()
// })
// .catch(error => {
//     dispatch(getUsersError(error))
// })
