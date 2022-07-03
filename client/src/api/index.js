import axios from 'axios';

const url = 'http://localhost:5000/cards';

export const fetchPosts = () => axios.get(url);
