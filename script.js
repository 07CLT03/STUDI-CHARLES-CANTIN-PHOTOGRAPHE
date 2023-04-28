const loadingTitle1 = document.querySelector('.photographer-title-1');
const loadingTitle2 = document.querySelector('.photographer-title-2');
const mediasHeader = document.querySelectorAll('.media-icons-header');
const mediasHeader1 = document.querySelector('.media-header-1');
const mediasHeader2 = document.querySelector('.media-header-2');
const mediasHeader3 = document.querySelector('.media-header-3');
const navigationHeader = document.querySelector('.navigation-header');
const navHeader1 = document.querySelector('.link1');
const navHeader2 = document.querySelector('.link2');
const navHeader3 = document.querySelector('.link3');
const navHeader4 = document.querySelector('.link4');




window.addEventListener('load', () => {

    const TL = gsap.timeline({paused:true});

    TL
    .staggerFrom(loadingTitle1,1, {top: -50, opacity: 0, ease:"power2.out"}, 0.4)
    .staggerFrom(loadingTitle2,1, {top: -50, opacity: 0, ease:"power2.out"}, 0.4, '-=1')
    .staggerFrom(navigationHeader, 1, {left:-200, ease:"power2.out"}, 0.3, '-=1')
    .from(navHeader1, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.3, '-=1')
    .from(navHeader2, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.3, '-=1')
    .from(navHeader3, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.3, '-=1')
    .from(navHeader4, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.3,);

    TL.play(); 
})







const cardLeft = document.querySelector('.footer-card-rleft');
const cardCenter = document.querySelector('.footer-card-center');
const cardRight = document.querySelector('.footer-card-right');


window.addEventListener('scroll',()=> {


  let faders = document.querySelectorAll('.fade-in');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/2; 

    if (contentPosition < screenPosition) {
      faders.classList.add('fade-in'); 
    }else{
      faders.classList.remove('fade-in'); 
    }

  });

 



