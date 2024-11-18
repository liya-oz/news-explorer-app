export function activeBurgerMenu() {
  const burgerIcon = document.querySelector('.burger-menu-icon');
  const menu = document.querySelector('#nav-menu');
  const hamMenu = document.querySelector('.ham-menu');
  const navLinks = document.querySelectorAll('.navigation a'); // Select all navigation links

  if (!burgerIcon || !menu || !hamMenu) return;

  // Toggle menu visibility when burger icon is clicked
  burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamMenu.classList.toggle('active');
  });

  // Close the menu when any navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      hamMenu.classList.remove('active');
    });
  });

  // Reset menu for larger screens
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
      hamMenu.classList.remove('active');
    }
  });
}
