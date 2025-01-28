const header_container = document.querySelector('.header_container');

// Добавляем обработчик события scroll
window.addEventListener('scroll', () => {
  // Если прокрутили больше 50px, добавляем класс "scrolled"
  if (window.scrollY > 150) {
    header_container.classList.add('scrolled');
  } else {
    // Если прокрутили вверх, убираем класс
    header_container.classList.remove('scrolled');
  }
});