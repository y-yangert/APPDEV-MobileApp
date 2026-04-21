import {
  USER_LOGIN,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_REGISTER,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
} from '../actions';

import {
  USER_FIELDS,
  LOGIN_CREDS,
  REGISTER_CREDS,
  AUTH_RESPONSE_USER,
} from '../constants/user';

const INITIAL_STATE = { // const -> read only; initial state sa reducer
  data: null,
  isLoading: false,
  isError: false,
};

// var a; let a; -> equivalent

// basically i-overwrite and initial state
export default function reducer(state = INITIAL_STATE, action) { // 'action' gikan sa saga
  console.log(action.type);
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state, // expanded state, extends INITIAL_STATE
        data: null,
        isLoading: true,
        isError: false,
      };

    case USER_LOGIN_COMPLETED:
      console.log(
        '[Auth Reducer] LOGIN_COMPLETED -> stored in state:',
        action.payload?.token,
        'username:',
        action.payload?.user?.[AUTH_RESPONSE_USER.USERNAME],
      );
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        errorMessage: null,
      };

    case USER_LOGIN_ERROR:
      console.log(
        '[Auth Reducer] LOGIN_ERROR -> not stored, errorMessage:',
        action.payload,
      );
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case USER_LOGIN_RESET:
      console.log('[Auth Reducer] LOGIN_RESET -> state reset to INITIAL_STATE');
      return INITIAL_STATE;

    case USER_REGISTER_REQUEST:
      console.log('[Auth Reducer] REGISTER_REQUEST -> isLoading=true');
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: null,
      };

    case USER_REGISTER_COMPLETED:
      console.log(
        '[Auth Reducer] REGISTER_COMPLETED -> (will follow with login)',
      );
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
      };

    case USER_REGISTER_ERROR:
      console.log(
        '[Auth Reducer] REGISTER_ERROR -> not stored, errorMessage:',
        action.payload,
      );
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}
