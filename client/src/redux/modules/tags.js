// INITIAL STATE
const initialState = {
  selectedTags: []
};

// ACTIONS
const SET_SELECTEDTAGS_BEGIN = "SET_SELECTEDTAGS_BEGIN";
const SET_SELECTEDTAGS_SUCCESS = "SET_SELECTEDTAGS_SUCCESS";
const SET_SELECTEDTAGS_ERROR = "SET_SELECTEDTAGS_ERROR";

// ACTION CREATORS
export const setSelectedTagsBegin = () => {
  return {
    type: SET_SELECTEDTAGS_BEGIN
  };
};

export const setSelectedTagsSuccess = selectedTags => {
  return {
    type: SET_SELECTEDTAGS_SUCCESS,
    selectedTags
  };
};

export const setSelectedTagsError = error => {
  return {
    type: SET_SELECTEDTAGS_ERROR,
    error
  };
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTEDTAGS_BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case SET_SELECTEDTAGS_SUCCESS:
      return {
        ...state,
        selectedTags: action.selectedTags,
        isLoading: false
      };
    case SET_SELECTEDTAGS_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export const setTags = values => {
  return dispatch => {
    dispatch(setSelectedTagsBegin());
    try {
      dispatch(setSelectedTagsSuccess(values));
    } catch (e) {
      dispatch(setSelectedTagsError(e));
    }
  };
};
