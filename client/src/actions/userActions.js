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

export const getUsers = (dispatch) => {
    dispatch(getUsersBegin())
    return async (dispatch) => {
        try {
            const userData = await fetch(`${mainURL}/users`)
            const user = await userData.json()
            dispatch(getUsersSuccess())
            return user
        } catch(e) {
            console.log(e)
        }
    }
        // fetch(`${mainURL}/users`)
        // .then(resp => {
        //     dispatch(getUsersSuccess())
        //     return resp.json()
        // })
        // .catch(error => {
        //     dispatch(getUsersError(error))
        // })

    // return async function getData() {
    //     try {
    //         const data = await rp({
    //             uri: `${mainURL}/users`,
    //             json: true
    //         })

    //         console.log(data)

    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

}