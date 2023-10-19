const caroseulItens = document.querySelectorAll('.carousel-img')
let carousel = document.querySelector('.carousel')
let mainCarouselDiv = document.querySelector('.carousel-wrapper')

let isPressed = false;
let startX;
let x;


mainCarouselDiv.addEventListener('mousedown', e=>{
  isPressed = true;
  startX = e.offsetX - carousel.offsetLeft
  mainCarouselDiv.style.cursor = 'grabbing'
})

mainCarouselDiv.addEventListener('mouseenter', ()=>{
  mainCarouselDiv.style.cursor = 'default'
})

window.addEventListener('mouseup', ()=>{
  mainCarouselDiv.style.cursor = 'grab'
  isPressed = false;
})

mainCarouselDiv.addEventListener('mousemove', e=>{
  if(!isPressed) return;
  e.preventDefault();

  x = e.offsetX
  console.log(x)
  console.log(startX)

  carousel.style.left = `${x - startX}px`
})
