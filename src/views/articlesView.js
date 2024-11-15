import { createArticleListItemView } from './articleListItemView.js';

export function createArticlesView(viewProps) {
  const root = document.createElement('div');
  root.className = 'articles-container';

  root.innerHTML = String.raw`
    <header class="header">
      <div class="header-content">
        <div>Guardian Articles</div>
      </div>
    </header>
    <div class="loading-indicator hide">
      <div class="spin">
        <i class="fa-solid fa-spinner fa-2xl"></i>
      </div>
    </div>
    <div id="list-container"></div>
    <div class="button-container">
      <button id="prev-btn">Previous</button>
      <button id="next-btn">Next</button>
    </div>
  `;

  const loadingIndicator = root.querySelector('.loading-indicator');
  const listContainer = root.querySelector('#list-container');
  const prevBtn = root.querySelector('#prev-btn');
  const nextBtn = root.querySelector('#next-btn');

  prevBtn.addEventListener('click', viewProps.onPrevPage);
  nextBtn.addEventListener('click', viewProps.onNextPage);

  const update = (state) => {
    if (state.loading) {
      loadingIndicator.classList.remove('hide');
    } else {
      loadingIndicator.classList.add('hide');
    }

    if (state.error || !state.data) {
      listContainer.innerHTML = state.error
        ? 'Error loading articles.'
        : 'No articles available.';
      return;
    }

    listContainer.innerHTML = '';

    const articleList = document.createElement('ul');
    articleList.className = 'no-bullets';
    listContainer.appendChild(articleList);

    state.data.forEach((article) => {
      const listItemView = createArticleListItemView({
        article,
        onItemClick: viewProps.onItemClick,
      });
      articleList.appendChild(listItemView.root);
    });

    prevBtn.disabled = !state.hasPrev;
    nextBtn.disabled = !state.hasNext;
  };

  return { root, update };
}
