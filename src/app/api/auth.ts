import { AuthResponse, User } from '../constants/user';

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

const BASE_URL = 'http://localhost:8000/api';

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const authLogin = async (
  creds: { username: string; password: string }
): Promise<AuthResponse> => {
  
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Login failed');
  return await response.json();
};

export const authRegister = async (
  data: { username: string; email: string; password: string }
): Promise<AuthResponse> => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Registration failed');
  return await response.json();
};

