// AUTH/USER_LOGIN
export const USER_LOGIN = 'USER_LOGIN' as const;
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST' as const;
export const USER_LOGIN_COMPLETED = 'USER_LOGIN_COMPLETED' as const;
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR' as const;
export const USER_LOGIN_RESET = 'USER_LOGIN_RESET' as const;

export const USER_LOGOUT ='USER_LOGOUT' as const;
export const USER_LOGOUT_COMPLETED = 'USER_LOGOUT_COMPLETED' as const;

// AUTH/USER_REGISTER
export const USER_REGISTER = 'USER_REGISTER' as const;
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST' as const;
export const USER_REGISTER_COMPLETED = 'USER_REGISTER_COMPLETED' as const;
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR' as const;

//action helpers

export const userLogin = (creds: { username: string; password: string }) => ({
  type: USER_LOGIN,
  payload: creds,
});

export const userRegister = (data: { username: string; email: string; password: string }) => ({
  type: USER_REGISTER,
  payload: data,
});

export const userLogout = () => ({ type: USER_LOGOUT });