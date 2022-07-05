import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

const url = 'http://localhost:5000/cards';

export const fetchPosts = () => API.get('/cards');

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

