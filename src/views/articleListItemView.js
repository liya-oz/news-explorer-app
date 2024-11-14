export function createArticleListItemView({ article, onItemClick }) {
  const root = document.createElement('li');
  root.className = 'list-item whiteframe article-item';

  const publicationDate = new Date(article.webPublicationDate);
  const today = new Date();

  const isToday = publicationDate.toDateString() === today.toDateString();
  const dateOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = isToday
    ? `Published today at ${publicationDate.toLocaleTimeString(
        'en-US',
        dateOptions,
      )}`
    : `Published on ${publicationDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })} at ${publicationDate.toLocaleTimeString('en-US', dateOptions)}`;

  root.innerHTML = `
    <div class="article-content">
      <p class="article-section">${
        article.sectionName || 'Section not specified'
      }</p>
      <h4 class="article-title">
        <a href="${article.webUrl}" target="_blank">${article.webTitle}</a>
      </h4>
      <p class="article-trail-text">${article.fields?.trailText || ''}</p>
      <p class="article-metadata">${formattedDate}</p>
    </div>
    <div class="article-thumbnail">
      <img src="${article.fields?.thumbnail || ''}" alt="${article.webTitle}" />
    </div>
  `;

  if (onItemClick) root.addEventListener('click', () => onItemClick(article));

  return { root };
}
