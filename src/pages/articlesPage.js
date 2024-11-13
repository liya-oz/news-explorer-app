import { API_BASE_URL, API_KEY } from '../constants.js';
import { fetchData } from '../util/fetchData.js';
import { loadPage } from '../util/loadPage.js';
import { createArticlesView } from '../views/articlesView.js';

import { createErrorPage } from './errorPage.js';

export function createArticlesPage(state) {
  const onNextPage = () => {
    state = { ...state, page: state.page + 1 };
    update();
  };

  const onPrevPage = () => {
    state = { ...state, page: state.page - 1 };
    update();
  };

  const viewProps = {
    onNextPage,
    onPrevPage,
  };

  const articlesView = createArticlesView(viewProps);

  const update = async () => {
    try {
      state = { ...state, error: null, loading: true, data: null };
      articlesView.update(state);

      const url = `${API_BASE_URL}/search?page=${state.page}&page-size=${state.pageSize}&order-by=${state.orderBy}&show-fields=thumbnail,trailText&api-key=${API_KEY}`;

      const { data, headers } = await fetchData(url);

      const totalResults = headers.get('Total-Results') || 0;
      console.log(headers);
      const totalPages = Math.ceil(totalResults / 10);

      state = {
        ...state,
        data,
        loading: false,
        hasPrev: state.page > 1,
        hasNext: state.page < totalPages,
      };
      articlesView.update(state);
    } catch (error) {
      state = { ...state, error, loading: false };
      loadPage(createErrorPage, state);
    }
  };

  update();

  return articlesView;
}
