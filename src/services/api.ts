import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://server-system-inventory-production.up.railway.app/',
});
