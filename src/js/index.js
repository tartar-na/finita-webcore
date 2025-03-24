import '../scss/style.scss'

// Инициализация слайдера
const breakpoint = 768

if (window.innerWidth < breakpoint) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}

const swiperCSS = document.querySelector('.swiper')
const swiperWrapperCSS = document.querySelector('.swiper-wrapper')
const swiperSlideCSS = document.querySelectorAll('.swiper-slide')
const swiperPagination = document.querySelectorAl

// сброс действия по умолчанию для всех ссылок
const links = document.querySelectorAll('a')
console.log(links)

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Вы не можете перейти по этой ссылке!')
  })
}

// Кнопка Читать далее и кнопка скрыть

const readMore = document.querySelector('.paragraph__button')
const paragraphBlock = document.querySelector('.paragraph__text')
const readLess = document.querySelector('.paragraph__button_js')

readMore.addEventListener('click', (event) => {
  paragraphBlock.classList.toggle('paragraph__text_extended')
  readMore.classList.toggle('hide_hiden')
  readLess.classList.toggle('hide_hiden')
})

readLess.addEventListener('click', (event) => {
  readMore.classList.toggle('hide_hiden')
  readLess.classList.toggle('hide_hiden')
  paragraphBlock.classList.toggle('paragraph__text_extended')
})

// Бургер + aside

// открытие
const burgerImg = document.querySelector('.head__burger-link')
const body = document.querySelector('body')
const asideMenu = document.querySelector('.burger-menu')
const main = document.querySelector('.main')
const opacityBlock = document.querySelector('.opacity-block')

console.log(asideMenu)
burgerImg.addEventListener('click', (event) => {
  asideMenu.classList.toggle('hide_hiden')
  body.classList.toggle('scrollStop')
  asideMenu.classList.toggle('sideMenu')
  opacityBlock.classList.toggle('opacity')
})

// закрытие

const hideAside = document.querySelector('.burger-menu__img_hide')

hideAside.addEventListener('click', (event) => {
  burgerImg.classList.toggle('hide_hiden')
  body.classList.toggle('scrollStop')
  asideMenu.classList.toggle('hide_hiden')
  burgerImg.classList.toggle('hide_hiden')
  opacityBlock.classList.toggle('opacity')
})

// Реализация закрытия при клике по body

// const opacityBlock = document.querySelector('.opacity-block')

opacityBlock.addEventListener('click', (event) => {
  opacityBlock.classList.toggle('opacity')
  if (!asideMenu.classList.contains('hide_hiden')) {
    asideMenu.classList.toggle('hide_hiden')
  }
  if (!feedBackForm.classList.contains('hide_hiden')) {
    feedBackForm.classList.toggle('hide_hiden')
  }
  if (!callArea.classList.contains('hide_hiden')) {
    callArea.classList.toggle('hide_hiden')
  }
  if (body.classList.contains('scrollStop')) {
    body.classList.toggle('scrollStop')
  }
})

// Открытие формы обратной связи
const feedBackFormShowImgButton = document.querySelector('.footer__img_2')
const feedBackForm = document.querySelector('.feed-back')

feedBackFormShowImgButton.addEventListener('click', (event) => {
  feedBackForm.classList.toggle('hide_hiden')
  // body.classList.toggle('scrollStop')
  asideMenu.classList.toggle('hide_hiden')
})
// закрытие

const feedBackFormHideImgButton = document.querySelector('.feed-back__img')

feedBackFormHideImgButton.addEventListener('click', (event) => {
  feedBackForm.classList.toggle('hide_hiden')
  // body.classList.toggle('scrollStop')
  asideMenu.classList.toggle('hide_hiden')
})

// Заказать звонок

// открытие

const callImgButtonShow = document.querySelector('.footer__img_1')
const callArea = document.querySelector('.call-order')

callImgButtonShow.addEventListener('click', (event) => {
  callArea.classList.toggle('hide_hiden')
  asideMenu.classList.toggle('hide_hiden')
})

// закрытие

const callOrderFormHideImgButton = document.querySelector('.call-order__img')

callOrderFormHideImgButton.addEventListener('click', (event) => {
  callArea.classList.toggle('hide_hiden')
  // body.classList.toggle('scrollStop')
  asideMenu.classList.toggle('hide_hiden')
})

// Показать всё и скрыть для первого слайдера

const firstSliderShowButton = document.querySelector('.brend-slider_show-button')
const firstSliderCloseButton = document.querySelector('.brend-slider__hidden-button')
const slidersField = document.querySelector('.swiper-wrapper_flex')

firstSliderShowButton.addEventListener('click', (event) => {
  event.preventDefault()

  firstSliderShowButton.classList.toggle('hide_hiden')
  firstSliderCloseButton.classList.toggle('hide_hiden')
  slidersField.classList.toggle('swiper-wrapper_extended')
})

firstSliderCloseButton.addEventListener('click', (event) => {
  event.preventDefault()

  firstSliderShowButton.classList.toggle('hide_hiden')
  firstSliderCloseButton.classList.toggle('hide_hiden')
  slidersField.classList.toggle('swiper-wrapper_extended')
})

// Показать всё и скрыть для второго слайдера

const secondSliderShowButton = document.querySelector(
  '.tecnikal-slider_show-button-wrapper'
)
const secondSliderCloseButton = document.querySelector(
  '.tecnikal-slider_show-hidden-wrapper'
)
const slidersField2 = document.querySelector('.swiper-wrapper2_flex')

secondSliderShowButton.addEventListener('click', (event) => {
  event.preventDefault()

  secondSliderShowButton.classList.toggle('hide_hiden')
  secondSliderCloseButton.classList.toggle('hide_hiden')
  slidersField2.classList.toggle('swiper-wrapper2_flex-extended')
})

secondSliderCloseButton.addEventListener('click', (event) => {
  event.preventDefault()

  secondSliderShowButton.classList.toggle('hide_hiden')
  secondSliderCloseButton.classList.toggle('hide_hiden')
  slidersField2.classList.toggle('swiper-wrapper2_flex-extended')
})

// перенос формы "заказать звонок" и "обратная связь" внутрь блока main для десктопов
// const callArea = document.querySelector('.call-order')
// const main = document.querySelector('.main')
// const feedBackForm = document.querySelector('.feed-back')
if (window.innerWidth >= 1440) {
  main.appendChild(callArea)
  main.appendChild(feedBackForm)
}

// реализация кнопки заказать звонок для десктопов

if (window.innerWidth >= 1440) {
  callImgButtonShow.addEventListener('click', (event) => {
    opacityBlock.classList.toggle('opacity')
    body.classList.toggle('scrollStop')

    window.scrollTo({
      top: 0, // это координат где должен быть экран
      behavior: 'smooth' //Это анимация
    })
  })

  callOrderFormHideImgButton.addEventListener('click', (event) => {
    opacityBlock.classList.toggle('opacity')
    body.classList.toggle('scrollStop')
  })
}

// Реализация кнопки "обратная связь для десктопов"

if (window.innerWidth >= 1440) {
  feedBackFormShowImgButton.addEventListener('click', (event) => {
    opacityBlock.classList.toggle('opacity')
    body.classList.toggle('scrollStop')

    window.scrollTo({
      top: 0, // это координат где должен быть экран
      behavior: 'smooth' //Это анимация
    })
  })

  feedBackFormHideImgButton.addEventListener('click', (event) => {
    opacityBlock.classList.toggle('opacity')
    body.classList.toggle('scrollStop')
  })
}