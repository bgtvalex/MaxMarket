import ScrollReveal from 'scrollreveal'

// Базовые настройки
ScrollReveal({
  distance: '50px',
  duration: 2000,
})

ScrollReveal().reveal(`.start__title, .start__subtitle, .start__img, .btn, .steps__accent-title, steps::before, .steps__cards, .board__content, .title-2, .acc__item, .about__row, .diff__card-title, .diff__item, .i-card, .contacts__item, .form__input--wrapper` , {
  origin: 'bottom',
})

export default ScrollReveal