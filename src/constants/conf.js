
const environment = process.env.NODE_ENV;

export const SITE_ROOT = environment === 'production' ? 'https://4taps.me' : 'http://127.0.0.1:3000';
