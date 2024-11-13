const cache = {};

export async function fetchData(url) {
  const res = await fetch(url, {
    headers: { accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}  ${res.statusText}`);
  }

  const jsonResponse = await res.json();
  const data = jsonResponse.response.results;
  const headers = res.headers;

  return { data, headers };
}

export async function fetchCached(url) {
  let cacheItem = cache[url];
  if (cacheItem) {
    return cacheItem;
  }

  cacheItem = await fetchData(url);
  cache[url] = cacheItem;

  return cacheItem;
}
