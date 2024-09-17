import { baseServerUrl } from '@/utils/constants';
import axios from 'axios';

export const api = axios.create({
  baseURL: baseServerUrl,
  withCredentials: true,
});
