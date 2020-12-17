// SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

// ANIMATION GSAP

// TEXT
gsap.from('.home__title', 1.5, {
  autoAlpha: 0,
  delay: 0.5,
  y: 50
})

gsap.from('.home__description', 1.5, {
  autoAlpha: 0,
  delay: 0.8,
  y: 50
})

// IMG
gsap.from('.airpod1', 2, {
  autoAlpha: 0,
  delay: 1.2,
  y: -40
})

gsap.from('.airpod2', 2, {
  autoAlpha: 0,
  delay: 1.4,
  y: 40
})

// NAV
gsap.from('.nav__logo', 2.5, {
  autoAlpha: 0,
  delay: 1.5,
  y: 25
})

gsap.from('.nav__toggle', 2.5, {
  autoAlpha: 0,
  delay: 1.7,
  y: 25
})

gsap.from('.nav__item', 2.5, {
  autoAlpha: 0,
  delay: 1.9,
  y: 25,
  ease: Expo.easeOut,
  stagger: .3
})

gsap.from('.nav__btn', 2.5, {
  autoAlpha: 0,
  delay: 2,
  y: 25
})

// SCROLL
gsap.from('.home__scroll', 1.5, {
  autoAlpha: 0,
  delay: 2.3,
  y: 30
})

// SCROLL MAGIC
// var animate = new TimelineMax({ onUpdate: updatePercentage });
var animate = new TimelineMax();
var controller = new ScrollMagic.Controller()

animate
  .from('.details__img', {
    autoAlpha: 0,
    y: 25
  })
  .from('.details__box', 1, {
    autoAlpha: 0,
    y: 25,
    ease: Expo.easeOut,
    stagger: .3
  })



var scene = new ScrollMagic.Scene({
  triggerElement: '.details__box'
})

  .setTween(animate)
  .addTo(controller)

// function updatePercentage() {
//   animate.progress()
// }