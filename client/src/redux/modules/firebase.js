const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = user => ({
  type: LOGIN,
  payload: user
});

export const logout = () => ({
  type: LOGOUT
});

export default function(state = {}, action) {
  // TODO
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthed: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuthed: false
      };
    default:
      return state;
  }
}
