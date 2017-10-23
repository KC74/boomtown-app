// import { mainURL } from '../constants';

// INITIAL STATE
const initialState = {
    users: [],
}


// ACTIONS
const GET_USERS_BEGIN = 'GET_USERS_BEGIN';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_ERROR = 'GET_USERS_ERROR';


// ACTION CREATORS
export const getUsersBegin = () => {
    return {
        type: 'GET_USERS_BEGIN'
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: 'GET_USERS_SUCCESS',
        users
    }
}

export const getUsersError = (error) => {
    return {
        type: 'GET_USERS_ERROR',
        error
    }
}

// REDUCER
export default ( state = initialState, action ) {
    switch (action.type) {
        case 'GET_USERS_BEGIN':
            return {
            ...state,
            isLoading: true,
        }

        case 'GET_USERS_SUCCESS': 
            return {
                ...state
            }
        case 'GET_USERS_ERROR':
            return {
            ...state,
            isLoading: false
        }
        default:
            return state
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
//
// ASYNC FETCHING
//
// export const getUsers = async (dispatch) => {
//     dispatch(getUsersBegin())
//     try {
//         const userData = await fetch(`${mainURL}/users`)
//         const user = await userData.json()
//         dispatch(getUsersSuccess())

//         return user
//     } catch (e) {
//         dispatch(getUsersError(e))
//     }
// }