const timer = (deadline) => {
   const days = document.querySelector('.count_1 > span');
   const hours = document.querySelector('.count_2 > span');
   const minutes = document.querySelector('.count_3 > span');
   const seconds = document.querySelector('.count_4 > span');

   days.textContent = '00';
   hours.textContent = '00';
   minutes.textContent = '00';
   seconds.textContent = '00';

   const addZero = num => num >= 10 ? num : `0${num}`;

   const getDate = () => {
      const dateEnd = new Date(deadline).getTime();
      const today = new Date().getTime();

      const dateRemaining = (dateEnd - today) / 1000;
      const days = addZero(Math.floor(dateRemaining / 60 / 60 / 24) % 24);
      const hours = addZero(Math.floor(dateRemaining / 60 / 60) % 60);
      const minutes = addZero(Math.floor(dateRemaining / 60) % 60);
      const seconds = addZero(Math.floor(dateRemaining) % 60);
      
      return {dateRemaining, days, hours, minutes, seconds}
   }

   const renderTimer = () => {
      const dates = getDate();
      
      if(dates.dateRemaining < 0) return;

      days.textContent = dates.days;
      hours.textContent = dates.hours;
      minutes.textContent = dates.minutes;
      seconds.textContent = dates.seconds;
      
      setInterval(renderTimer, 1000);
   }

   renderTimer();
}

export default timer;