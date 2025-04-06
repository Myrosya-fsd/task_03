import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-about-us');
const accordion = new Accordion(container, {
  showMultiple: true,
  duration: 400,
});

// Відкрити перший елемент після ініціалізації
const firstTrigger = container.querySelector('.ac .ac-trigger');
if (firstTrigger) {
  firstTrigger.click();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mySwiper').forEach((swiperElement, index) => {
    new Swiper(swiperElement, {
      loop: true,
      grabCursor: true,
      simulateTouch: true,
      touchRatio: 1,
      breakpoints: {
        320: { slidesPerView: 2 },
        375: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1440: { slidesPerView: 6 },
      },
      navigation: {
        nextEl: `.swiper-button-next`,
      },
      mousewheel: true,
      speed: 500,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
  });
});
