import { AuthResponse } from '../constants/user';

// AUTH/USER_LOGIN
export const USER_LOGIN = 'USER_LOGIN' as const;
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST' as const;
export const USER_LOGIN_COMPLETED = 'USER_LOGIN_COMPLETED' as const;
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR' as const;
export const USER_LOGIN_RESET = 'USER_LOGIN_RESET' as const;

// AUTH/USER_REGISTER
export const USER_REGISTER = 'USER_REGISTER' as const;
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST' as const;
export const USER_REGISTER_COMPLETED = 'USER_REGISTER_COMPLETED' as const;
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR' as const;

// Types
export interface UserLoginPayload {
  username: string;
  password: string;
}

export interface UserRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export type UserLoginAction = {
  type: typeof USER_LOGIN;
  payload: { username: string; password: string };
};

export type UserLoginRequestAction = {
  type: typeof USER_LOGIN_REQUEST;
};

export type UserLoginCompletedAction = {
  type: typeof USER_LOGIN_COMPLETED;
  payload: AuthResponse;
};

export type UserLoginErrorAction = {
  type: typeof USER_LOGIN_ERROR;
  payload: string;
};

export type UserLoginResetAction = {
  type: typeof USER_LOGIN_RESET;
};

export type UserRegisterAction = {
  type: typeof USER_REGISTER;
  payload: { username: string; email: string; password: string };
};

export type UserRegisterRequestAction = {
  type: typeof USER_REGISTER_REQUEST;
};

export type UserRegisterCompletedAction = {
  type: typeof USER_REGISTER_COMPLETED;
  payload: AuthResponse;
};

export type UserRegisterErrorAction = {
  type: typeof USER_REGISTER_ERROR;
  payload: string;
};

export type AuthAction =
  | UserLoginAction
  | UserLoginRequestAction
  | UserLoginCompletedAction
  | UserLoginErrorAction
  | UserLoginResetAction
  | UserRegisterAction
  | UserRegisterRequestAction
  | UserRegisterCompletedAction
  | UserRegisterErrorAction;

export const userLogin = (payload: UserLoginPayload): UserLoginAction => ({
  type: USER_LOGIN,
  payload,
});

export const userRegister = (payload: UserRegisterPayload): UserRegisterAction => ({
  type: USER_REGISTER,
  payload,
});

export const resetLogin = (): UserLoginResetAction => ({
  type: USER_LOGIN_RESET,
});