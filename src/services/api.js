const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function request(endpoint, options = {}) {
  const headers = new Headers(options.headers);
  const token = localStorage.getItem('authToken');

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  const config = {
    ...options,
    headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
}

const api = {
  get: (endpoint, options) => request(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options) => request(endpoint, { ...options, method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }),
  put: (endpoint, body, options) => request(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }),
  delete: (endpoint, options) => request(endpoint, { ...options, method: 'DELETE' }),
};

export default api;
