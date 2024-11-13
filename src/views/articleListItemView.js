export function createArticleListItemView({ article, onItemClick }) {
  const root = document.createElement('li');
  root.className = 'list-item whiteframe article-item';

  root.innerHTML = `
    <h4 class="article-title">
      <a href="${article.webUrl}" target="_blank">${article.webTitle}</a>
    </h4>
    <p class="article-section">${
      article.sectionName || 'Section not specified'
    }</p>
    <span class="article-date">${new Date(
      article.webPublicationDate,
    ).toLocaleDateString()}</span>
  `;

  return { root };
}
