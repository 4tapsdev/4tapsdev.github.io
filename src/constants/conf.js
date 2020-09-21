
const environment = process.env.NODE_ENV;

export const SITE_ROOT = environment === 'production' ? 'https://4taps.me' : 'http://localhost:3000';
export const BRAND_URL = `${SITE_ROOT}/images/brand.svg`;
