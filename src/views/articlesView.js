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
      <button id="first-btn"><<</button>
      <button id="prev-btn"><</button>
      <span id="page-numbers"></span>
      <button id="next-btn">></button>
      <button id="last-btn">>></button>
      <span id="total-items"></span>
      <button id="to-top" class="to-top-btn">↑</button>
    </div>
  `;

  const loadingIndicator = root.querySelector('.loading-indicator');
  const listContainer = root.querySelector('#list-container');
  const prevBtn = root.querySelector('#prev-btn');
  const nextBtn = root.querySelector('#next-btn');
  const firstBtn = root.querySelector('#first-btn');
  const lastBtn = root.querySelector('#last-btn');
  const pageNumbersSpan = root.querySelector('#page-numbers');
  const totalItemsSpan = root.querySelector('#total-items');
  const toTopButton = root.querySelector('#to-top');

  firstBtn.addEventListener('click', () => viewProps.onPageChange(1));
  prevBtn.addEventListener('click', () => {
    viewProps.onPageChange(Math.max(1, viewProps.currentPage - 1));
  });
  nextBtn.addEventListener('click', () => {
    viewProps.onPageChange(
      Math.min(viewProps.totalPages, viewProps.currentPage + 1),
    );
  });
  lastBtn.addEventListener('click', () =>
    viewProps.onPageChange(viewProps.totalPages),
  );

  document.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
  });

  toTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const activatePagination = (state) => {
    const totalItems = state.totalResults || 0;
    const totalPages = Math.ceil(totalItems / state.pageSize);
    const currentPage = state.page;
    const maxPageLinks = 5;

    totalItemsSpan.textContent = `Page ${currentPage} of ${totalPages}`;

    pageNumbersSpan.innerHTML = '';

    let startPage = Math.max(1, currentPage - Math.floor(maxPageLinks / 2));
    let endPage = Math.min(totalPages, startPage + maxPageLinks - 1);
    if (endPage - startPage < maxPageLinks - 1) {
      startPage = Math.max(1, endPage - maxPageLinks + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      pageBtn.classList.toggle('active-page', i === currentPage);
      pageBtn.addEventListener('click', () => {
        viewProps.onPageChange(i);
      });
      pageNumbersSpan.appendChild(pageBtn);
    }

    firstBtn.disabled = currentPage === 1;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    lastBtn.disabled = currentPage === totalPages;

    viewProps.currentPage = currentPage;
    viewProps.totalPages = totalPages;
  };

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

    activatePagination(state);
  };

  return { root, update };
}
