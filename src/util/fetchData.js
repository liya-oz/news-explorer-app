import { PROXY_BASE_URL } from '../constants.js';

export async function fetchData(endpoint, queryParams = {}) {
  try {
    const url = new URL(endpoint, PROXY_BASE_URL);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    const res = await fetch(url.toString(), {
      headers: { accept: 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }

    const jsonResponse = await res.json();
    const data = jsonResponse.response?.results || [];
    const headers = res.headers;
    return { data, headers };
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
}
