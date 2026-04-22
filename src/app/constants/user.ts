// app/constants/user.ts

export const USER_FIELDS = {
  ID: 'id',
  USERNAME: 'username',
  EMAIL: 'email',
  PASSWORD: 'password',
  ROLES: 'roles',
  STATUS: 'status',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
  IMAGE: 'image',
  GENDER: 'gender',
  BIRTHDATE: 'birthdate',
} as const;

export const LOGIN_CREDS = {
  USERNAME: 'username',
  PASSWORD: 'password',
} as const;

export const REGISTER_CREDS = {
  USERNAME: 'username',
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

export const AUTH_RESPONSE_USER = USER_FIELDS; // just reuse if identical

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string;
  roles?: string[];
  status?: string;
  created_at?: string;
  updated_at?: string;
  image?: string;
  gender?: string;
  birthdate?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}