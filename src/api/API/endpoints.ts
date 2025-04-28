const isProduction = import.meta.env.MODE === 'production';

const endpoints = {
  BASE_URL: isProduction ? import.meta.env.VITE_API_URL : '/api',
  LOGIN: 'oauth2/authorization',
  CALENDAR: 'calendars',
  MAILINGS: 'mailings',
  CERTIFICATIONS: 'certifications',
  MEMBERS: 'members/me',
  PROFILE: 'profile',
};

export default endpoints;
