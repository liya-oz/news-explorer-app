export function createErrorView(viewProps) {
  const root = document.createElement('div');
  root.className = 'error-container';
  root.innerHTML = `
    <h4>Something went wrong</h4>
    <p>${viewProps.error?.message || 'An unknown error occurred.'}</p>
    <button id="retry-btn">Retry</button>
  `;

  root.querySelector('#retry-btn').addEventListener('click', viewProps.onRetry);

  return { root };
}
