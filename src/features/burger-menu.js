export function activeBurgerMenu() {
  const burgerIcon = document.querySelector('.burger-menu-icon');
  const menu = document.querySelector('#nav-menu');
  const hamMenu = document.querySelector('.ham-menu');

  if (!burgerIcon || !menu || !hamMenu) return;

  burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamMenu.classList.toggle('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
      hamMenu.classList.remove('active');
    }
  });
}
