const endpoints = {
  BASE_URL: import.meta.env.VITE_API_URL,
  LOGIN: 'oauth2/authorization',
  CALENDAR: 'calendars',
  MAILINGS: 'mailings',
  CERTIFICATIONS: 'certifications',
  MEMBERS: 'members/me',
  PROFILE: 'profile',
};

export default endpoints;
