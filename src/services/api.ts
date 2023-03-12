import axios from 'axios';
<<<<<<< HEAD
import {BASE_URL} from '@env';

export const api = axios.create({
  baseURL: BASE_URL,
=======
import {BASE_URL, BASE_URL_DEVELOPMENT} from '@env';

export const api = axios.create({
  baseURL: BASE_URL_DEVELOPMENT,
>>>>>>> development
});
