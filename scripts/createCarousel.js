import { updateButtons } from "./updateCarouselButtons.js";

export function addDesktopCarousel(){
  let carousel = document.querySelector('.carousel')
  let mainCarouselDiv = document.querySelector('.carousel-wrapper')
  
  let isPressed = false;
  let startX;
  let x;
  
  
  mainCarouselDiv.addEventListener('mousedown', e=>{
    carousel.style.transition = '0s'
    console.log(e.type)
    isPressed = true;
    startX = e.offsetX - carousel.offsetLeft
    mainCarouselDiv.style.cursor = 'grabbing'
  })
  
  mainCarouselDiv.addEventListener('mouseenter', ()=>{
    mainCarouselDiv.style.cursor = 'grab'
  })
  
  window.addEventListener('mouseup', ()=>{
    mainCarouselDiv.style.cursor = 'grab'
    carousel.style.transition = '.5s'
    isPressed = false;
  })
  
  mainCarouselDiv.addEventListener('mousemove', e=>{
    if(!isPressed) return;
    e.preventDefault();
  
    x = e.offsetX
  
    carousel.style.left = `${x - startX}px`
    
    updateButtons()
    checkBoundary()
   
  })
  
  function checkBoundary(){
    let outer = mainCarouselDiv.getBoundingClientRect()
    let inner = carousel.getBoundingClientRect()
   
    if(parseInt(carousel.style.left) > 0 ){
      carousel.style.left = '0px'
    } else if(inner.right < outer.right){
      carousel.style.left = `-${inner.width - outer.width}px`
    }
  }
}

export function addMobileCarousel(){
  let carousel = document.querySelector('.carousel')
  let mainCarouselDiv = document.querySelector('.carousel-wrapper')
  
  let isPressed = false;
  let startX;
  let x;
  
  
  mainCarouselDiv.addEventListener('touchstart', e=>{
    isPressed = true;
    startX = e.touches[0].clientX
    mainCarouselDiv.style.scrollBehavior = 'auto'

    x = mainCarouselDiv.scrollLeft
  })
  
  mainCarouselDiv.addEventListener('touchend', ()=>{
    mainCarouselDiv.style.scrollBehavior = 'smooth'
    isPressed = false;
  })
  
  mainCarouselDiv.addEventListener('touchmove', e=>{

    if(!isPressed) return;
    e.preventDefault();
  
    let positionDiff = e.touches[0].pageX - startX
    mainCarouselDiv.scrollLeft = x - positionDiff
    
    carousel.scrollLeft = x - positionDiff
  
    updateButtons()
  })
}