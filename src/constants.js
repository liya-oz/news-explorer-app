const isLocalhost = window.location.hostname === 'localhost';

export const PROXY_BASE_URL = isLocalhost
  ? 'http://localhost:5000/proxy'
  : 'https://news-explorer-app.onrender.com/proxy';
