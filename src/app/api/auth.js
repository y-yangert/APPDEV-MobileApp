const BASE_URL = 'http://localhost:8000/api';

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json', //for GET
    'Content-Type': 'application/json', //for update methods
  },
};

export async function authLogin({ username, password }) {
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    ...options,
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Login failed');
  }
}

export async function authRegister({ username, email, password }) {
  const response = await fetch(BASE_URL + '/register', {
    method: 'POST',
    ...options,
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Registration failed');
  }
}
