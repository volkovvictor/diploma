const scroll = () => {
   const firstSection = document.getElementById('offer');
   const smoothScroll = document.querySelector('.smooth-scroll');

   const endSection = firstSection.offsetTop + firstSection.offsetHeight;

   const showScrollButton = () => {
      smoothScroll.style.display = window.scrollY < endSection ? 'none' : 'block';
   }

   smoothScroll.addEventListener('click', () => window.scrollTo({top: 0,behavior: "smooth"}));

   window.addEventListener('scroll', showScrollButton);

   showScrollButton();
}

export default scroll;