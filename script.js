const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');

  navLinks.forEach((link, index) => {
    link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
  });
});
