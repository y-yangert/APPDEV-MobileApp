// AUTH/USER_LOGIN
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_COMPLETED = 'USER_LOGIN_COMPLETED';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_RESET = 'USER_LOGIN_RESET';

// AUTH/USER_REGISTER
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_COMPLETED = 'USER_REGISTER_COMPLETED';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

// Action types
export interface UserLoginPayload {
  username: string;
  password: string;
}

export interface UserRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface UserLoginAction {
  type: typeof USER_LOGIN;
  payload: UserLoginPayload;
}

export interface UserRegisterAction {
  type: typeof USER_REGISTER;
  payload: UserRegisterPayload;
}

export interface ResetLoginAction {
  type: typeof USER_LOGIN_RESET;
}

// Action creators
export const userLogin = (payload: UserLoginPayload): UserLoginAction => ({
  type: USER_LOGIN,
  payload,
});

export const userRegister = (payload: UserRegisterPayload): UserRegisterAction => ({
  type: USER_REGISTER,
  payload,
});

export const resetLogin = (): ResetLoginAction => ({
  type: USER_LOGIN_RESET,
});

export type AuthAction = UserLoginAction | UserRegisterAction | ResetLoginAction;
