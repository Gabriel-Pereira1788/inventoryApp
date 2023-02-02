import axios from 'axios';
import {BASE_URL, BASE_URL_DEVELOPMENT} from '@env';

export const api = axios.create({
  baseURL: BASE_URL_DEVELOPMENT,
});
