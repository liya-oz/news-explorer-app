export function setupNavigationLinks(viewProps) {
  const navLinks = document.querySelectorAll('.navigation a');

  const handleKeywordSearch = (keyword) => {
    if (typeof viewProps.onFilterChange === 'function') {
      viewProps.onFilterChange({ keywords: keyword });
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const keyword = link.getAttribute('href').substring(1);
      handleKeywordSearch(keyword);
    });
  });
}