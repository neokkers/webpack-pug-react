import * as actionTypes from '../actions/types';

const initialState = {
  currentUser: null,
  isLoading: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...initialState,
        isLoading: false,
      };
    default:
      return state;
  }
};
