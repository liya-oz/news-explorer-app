import { API_BASE_URL, API_KEY } from '../constants.js';
import { fetchData } from '../util/fetchData.js';
import { loadPage } from '../util/loadPage.js';
import { createArticlesView } from '../views/articlesView.js';
import { createErrorPage } from './errorPage.js';

export function createArticlesPage(initialState) {
  const state = { ...initialState };

  const onNextPage = () => {
    state.page += 1;
    update();
  };

  const onPrevPage = () => {
    state.page -= 1;
    update();
  };

  const viewProps = {
    onNextPage,
    onPrevPage,
    onItemClick: (article) => {},
  };

  const articlesView = createArticlesView(viewProps);

  const update = async () => {
    try {
      state.loading = true;
      state.error = null;
      state.data = null;
      articlesView.update(state);

      const url = `${API_BASE_URL}/search?page=${state.page}&page-size=${state.pageSize}&order-by=${state.orderBy}&show-fields=thumbnail,trailText&api-key=${API_KEY}`;

      const { data, headers } = await fetchData(url);

      // Check if 'Total-Results' header is present
      let totalResults = headers.get('Total-Results');
      if (!totalResults) {
        totalResults = 100000;
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
