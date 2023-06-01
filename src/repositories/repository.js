import axios from 'axios';

export const baseDomain = 'https://api.npoint.io/78c8e2cc14e6e0691126';

const client = axios.create({
  baseUrl: baseDomain,
  headers: {'Content-Type' : 'application/json'}
})

export default client;