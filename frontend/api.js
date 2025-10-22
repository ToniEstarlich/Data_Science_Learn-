import axios from 'axios';

const API_BASE = 'http://192.168.0.137:8000/api';

export const getSamples = async () => {
  const res = await axios.get(`${API_BASE}/samples/`);
  return res.data;
};
