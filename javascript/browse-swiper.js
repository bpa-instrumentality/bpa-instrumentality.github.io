const swiper = new Swiper('.swiper', {
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: ['-100%', 0, 0],
      opacity: 0,
    },
    next: {
      translate: ['100%', 0, 0],
      opacity: 1,
    },
  },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });