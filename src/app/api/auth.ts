const BASE_URL = 'http://192.168.254.104:8000/api';

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const authLogin = async (
  creds: { username: string; password: string }
): Promise<{ success: boolean; user: object; token?: string }> => {
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(creds),
  });

  if (!response.ok && response.status === 401) {
    throw new Error('Invalid username or password');
  }
  
  if (!response.ok) {
    const body = await response.text();
    console.log('Response body:', body);
    throw new Error(`Login failed: ${response.status} - ${body}`);
  }

  return await response.json();
};

export const authRegister = async (
  data: { username: string; email: string; password: string }
): Promise<{ success: boolean; user: object; token?: string }> => {
  const response = await fetch(BASE_URL + '/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Registration failed: ' + response.status);

  return await response.json();
};
