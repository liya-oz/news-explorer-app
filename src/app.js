import { createArticlesPage } from './pages/articlesPage.js';
import { loadPage } from './util/loadPage.js';

function loadApp() {
  const state = {
    data: null,
    error: null,
    loading: false,
    page: 1,
    totalResults: 0,
    pageSize: 10,
    orderBy: 'newest',
    thumbnail: '',
    trailText: '',
  };

  loadPage(createArticlesPage, state);
}

window.addEventListener('load', loadApp);
