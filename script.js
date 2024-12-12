// Знаходимо елементи на сторінці
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Додаємо слухач подій на кнопку
menuToggle.addEventListener('click', () => {
  // Перемикаємо клас "open" для навігаційного меню
  navList.classList.toggle('open');
});
