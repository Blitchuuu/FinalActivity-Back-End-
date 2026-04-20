import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const apiAuth = {
  login: (data) => API.post('/auth/login', data),
  register: (data) => API.post('/auth/register', data),
};

export const apiVideos = {
  getAll: () => API.get('/videos'),
  getById: (id) => API.get(`/videos/${id}`),
  create: (data) => API.post('/videos', data),
  toggleLike: (id, like) => API.put(`/videos/${id}/likes`, { like }),
  deleteVideo: (id) => API.delete(`/videos/${id}`),
  incrementView: (id) => API.post(`/videos/${id}/view`),
};

export const apiUsers = {
  getHistory: (userId) => API.get(`/videos/users/${userId}/history`),
  addToHistory: (userId, videoId) => API.post(`/videos/users/${userId}/history`, { videoId }),
};

export default API;

