import {animate} from './helpers';

const popup = (btn, modalBody, close) => {
   const modal = document.querySelector(modalBody);
   const overlay = document.querySelector('.overlay');

   modal.style.transform = 'translate(-50%, -50%) scale(0)';
   overlay.style.opacity = '0';

   const openPopup = () => {
      overlay.classList.add(`overlay-${modal.classList[0]}`)
      modal.style.display = 'block';
      overlay.style.display = 'block';

      animate({
         duration: 200,
         timing(timeFraction) {
            return timeFraction;
         },
         draw(progress) {
            modal.style.transform = `translate(-50%, -50%) scale(${progress})`;
            overlay.style.opacity = progress;
         }
      });
   }

   const closePopup = () => {
      modal.style.display = '';
      modal.style.transform = 'translate(-50%, -50%) scale(0)';

      if (overlay.classList.contains(`overlay-${modal.classList[0]}`)) {
         overlay.style.display = 'none';
         overlay.style.opacity = '0';
      }

      overlay.classList.remove(`overlay-${modal.classList[0]}`)
   }

   document.body.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest(btn)) {
         e.preventDefault();
         openPopup();
      }

      if (!target.closest(btn) && (!target.closest(modalBody) || target.classList.contains(close))) {
         closePopup();
      }
   });

}

export default popup;