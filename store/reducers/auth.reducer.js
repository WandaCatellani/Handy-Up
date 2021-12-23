import { LOG_IN, SIGN_UP } from '../actions/auth.actions';

const INITIAL_STATE = {
  token: null,
  userId: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
    case LOG_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default AuthReducer;
