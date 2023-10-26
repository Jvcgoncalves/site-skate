// switch(element.currentTarget) {
//   case sliderRadios[0]:
//   if(element.type === 'touchstart'){
//     mainCarouselDiv.scrollLeft = 0
//     element.currentTarget.checked = true
//     break;
//   }  
//   carousel.style.left = '0px'
    
//   break;
//   case sliderRadios[1]:
//   if(element.type === 'touchstart'){
//     element.currentTarget.checked = true
//     mainCarouselDiv.scrollLeft = 295
//     break;
//   } 
//   console.log(element.type)
//   carousel.style.left = '-315px'
    
//   break;
//   case sliderRadios[2]:
//   if(element.type === 'touchstart'){
//     element.currentTarget.checked = true
//     mainCarouselDiv.scrollLeft = 780
//     break;
//   }  
//   carousel.style.left = '-778px'
    
//   break;
//   case sliderRadios[3]:
//   if(element.type === 'touchstart'){
//     element.currentTarget.checked = true
//     mainCarouselDiv.scrollLeft = 1199
//     break;
//   } 
//   carousel.style.left = '-1181px'
   
//   break;
//   case sliderRadios[4]:
//   if(element.type === 'touchstart'){
//     mainCarouselDiv.style.transition = 'scrollLeft .5s'
//     element.currentTarget.checked = true  
//     mainCarouselDiv.scrollLeft = 1488
//     break;
//   }  
//   carousel.style.left = '-1488px'
//   break;

export function updateButtons(e){
  let carousel = document.querySelector('.carousel')
  let mainCarouselDiv = document.querySelector('.carousel-wrapper')

  const sliderRadios = Array.from(document.querySelectorAll('.slider-browser-radio'))
  const sliderImgs = Array.from(document.querySelectorAll('.carousel-img'))

  let carouselLeft = carousel.style.left.replace(/[-\D.]/g,'')


  if(carouselLeft >= 1454 || mainCarouselDiv.scrollLeft >= 1450){

    sliderRadios[4].checked = true
    console.log(carousel.style.left)

  } else if(carouselLeft >= 1060 || mainCarouselDiv.scrollLeft >= 1050){

    sliderRadios[3].checked = true

  } 

}