const animate = ({timing, draw, duration}) => {

   let start = performance.now();

   requestAnimationFrame(function animate(time) {
   let timeFraction = (time - start) / duration;
   if (timeFraction > 1) timeFraction = 1;

   let progress = timing(timeFraction);

   draw(progress); // отрисовать её

   if (timeFraction < 1) {
      requestAnimationFrame(animate);
   }

   });
}

const validation = (elem, type) => {

   if (type === 'num') {
      return elem.value.replace(/[^0-9]/gi, '');
   }
}

export {animate, validation}