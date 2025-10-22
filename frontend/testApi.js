import axios from 'axios';

const API_BASE = 'http://192.168.0.137:8000/api';

async function testApi() {
  try {
    const res = await axios.get(`${API_BASE}/samples/`);
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

testApi();
