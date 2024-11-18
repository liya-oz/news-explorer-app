import { PROXY_BASE_URL } from '../constants.js';
import { fetchData } from '../util/fetchData.js';
import { loadPage } from '../util/loadPage.js';
import { createArticlesView } from '../views/articlesView.js';
import { createErrorPage } from './errorPage.js';

export function createArticlesPage(initialState) {
  const state = { ...initialState };
  let isFetching = false;

  const onPageChange = (newPage) => {
    if (isFetching) return;
    state.page = newPage;
    update();
  };

  const viewProps = {
    onPageChange,
    onItemClick: (article) => {
      if (article.webUrl) {
        window.open(article.webUrl, '_blank');
      }
    },
    onFilterChange: ({ keywords, section }) => {
      state.keywords = keywords;
      state.section = section;
      state.page = 1;
      update();
    },
  };

  const articlesView = createArticlesView(viewProps);

  const update = async () => {
    try {
      state.loading = true;
      state.error = null;
      state.data = null;
      articlesView.update(state);

      const queryParams = {
        page: state.page,
        'page-size': state.pageSize,
        'order-by': state.orderBy,
        'show-fields': 'thumbnail,trailText',
      };

      if (state.keywords) queryParams.q = state.keywords;
      if (state.section) queryParams.section = state.section;

      const endpoint = 'search';
      const url = `${PROXY_BASE_URL}/${endpoint}`;
      console.log('Fetching data from:', url, 'with params:', queryParams);

      const { data, headers } = await fetchData(url, queryParams);

      const totalResults = parseInt(
        headers.get('Total-Results') || '28465',
        10,
      );
      const totalPages = Math.ceil(totalResults / state.pageSize);

      if (totalResults === 0) {
        state.data = [];
        state.hasPrev = false;
        state.hasNext = false;
        articlesView.update(state);
        return;
      }

      state.data = data;
      state.loading = false;
      state.totalResults = totalResults;
      state.hasPrev = state.page > 1;
      state.hasNext = state.page < totalPages;

      articlesView.update(state);
    } catch (error) {
      console.error('Error in update:', error.message);
      state.error = error;
      state.loading = false;
      loadPage(createErrorPage, state);
    }
  };

  update();

  return articlesView;
}
