import { loadPage } from '../util/loadPage.js';
import { createErrorView } from '../views/errorView.js';
import { createArticlesView } from '../views/articlesView.js';

export function createErrorPage(state) {
  const onRetry = () => {
    loadPage(createArticlesView, state);
  };

  const viewProps = {
    error: state.error,
    onRetry,
  };

  return createErrorView(viewProps);
}
