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
  };

  const articlesView = createArticlesView(viewProps);

  const update = async () => {
    try {
      state.loading = true;
      state.error = null;
      state.data = null;
      articlesView.update(state);

      const endpoint = 'search';
      const queryParams = {
        page: state.page,
        'page-size': state.pageSize,
        'order-by': state.orderBy,
        'show-fields': 'thumbnail,trailText',
      };
      const { data, headers } = await fetchData(endpoint, queryParams);

      let totalResults = headers.get('Total-Results');
      if (!totalResults) {
        totalResults = 28465;
      } else {
        totalResults = parseInt(totalResults, 10);
      }
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
      state.error = error;
      state.loading = false;
      loadPage(createErrorPage, state);
    }
  };

  update();

  return articlesView;
}
