import {animate} from './helpers';

const slider = (items, buttons, arrowLeft, arrowRight, showSlides) => {
   const slides = document.querySelectorAll(items);
   const arrows = document.querySelector(buttons);

   let count = showSlides;
   let curSlide = 0;

   const nextSlides = () => {
      curSlide+=count;
      
      if (curSlide >= slides.length - 1) curSlide = 0;

      startSlider();
   }

   const prevSlides = () => {
      curSlide-=count;
      
      if (curSlide < 0) curSlide = slides.length - count;

      startSlider();
   }

   const startSlider = () => {

      count = window.innerWidth < 576 ? 1 : showSlides;

      slides.forEach(slide => {
         slide.style.display = 'none';
      });

      for (let i = 0; i < count; i++) {
         const showSlide =  slides[curSlide + i];
         showSlide.style.display = 'block';

         animate({
            duration: 200,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               showSlide.style.transform = `scale(${progress})`;
            }
            });
      }
   }

   arrows.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest(arrowRight)) {
         nextSlides();
      }

      if (target.closest(arrowLeft)) {
         prevSlides();
      }
   });

   startSlider();

   window.addEventListener('resize', startSlider);
}

export default slider;