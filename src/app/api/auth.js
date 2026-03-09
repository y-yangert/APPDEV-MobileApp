const BASE_URL = 'http://localhost:8000/api';

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json', //for GET
    'Content-Type': 'application/json', //for update methods
  },
};

export async function login({ email, password }) {
  const response = await fetch(BASE_URL + '/login', {
    ...options,

    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

  return data;
}
