export function createErrorView(viewProps) {
  const root = document.createElement('div');
  root.className = 'dialog-container whiteframe';
  root.innerHTML = String.raw`
    <h4>Oops... Something went wrong while loading articles</h4>
    <div>
      ${viewProps.error?.message || 'Unknown error occurred.'}
    </div>
    <button id="retry-btn">Retry</button>
  `;

  const retryButton = root.querySelector('#retry-btn');
  retryButton.addEventListener('click', viewProps.onRetry);

  return { root };
}
