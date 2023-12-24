const animate = ({timing, draw, duration}) => {

   let start = performance.now();

   requestAnimationFrame(function animate(time) {
   let timeFraction = (time - start) / duration;
   if (timeFraction > 1) timeFraction = 1;

   let progress = timing(timeFraction);

   draw(progress);

   if (timeFraction < 1) {
      requestAnimationFrame(animate);
   }

   });
}

const validation = (elem, type, required = false) => {
   let res = false;

   if (type === 'num') return elem.value.replace(/[^0-9]/gi, '');

   if (type === 'tel') res = /^\+?(\d{11,16}$)/gi.test(elem.value);
   if (type === 'name') res = !/[^а-яa-z\s]/gi.test(elem.value);

   if (required && elem.value.trim() === '') res = false;

   res ? elem.classList.remove('error') : elem.classList.add('error');
}

export {animate, validation};