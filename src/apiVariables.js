import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rebrickable.com/api/v3/lego',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `key ${process.env.REACT_APP_API_KEY}`
      },
});

const apiPost = axios.create(
  {
    baseURL: 'http://localhost:3001',
    headers: {
        "Content-Type": "application/json",
      },
}
)

export { api, apiPost }