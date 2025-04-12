
import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('foodmore_auth_token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication API calls
export const authApi = {
  register: async (userData: { username: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  login: async (userData: { email: string; password: string }) => {
    const response = await api.post('/auth/login', userData);
    return response.data;
  },
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  }
};

// Food items API calls
export const foodApi = {
  getAllItems: async (filters = {}) => {
    const response = await api.get('/food', { params: filters });
    return response.data;
  },
  getItemById: async (id: string) => {
    const response = await api.get(`/food/${id}`);
    return response.data;
  },
  getItemsByCategory: async (category: string) => {
    const response = await api.get(`/food/category/${category}`);
    return response.data;
  },
  getFeaturedItems: async () => {
    const response = await api.get('/food/featured/items');
    return response.data;
  }
};

// Order API calls
export const orderApi = {
  createOrder: async (orderData: any) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },
  getUserOrders: async () => {
    const response = await api.get('/orders/user');
    return response.data;
  },
  getOrderById: async (id: string) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  }
};

export default api;
