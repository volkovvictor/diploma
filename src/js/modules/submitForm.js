import {validation} from './helpers';

const submitForm = (someElem = []) => {
   const submitData = (url, data, method) => {
      return fetch(url, {
         method: method,
         body: JSON.stringify(data),
      }).then(res => res.json())
   }

   const getData = (form) => {
      const formData = new FormData(form);
      const elements = form.elements;
      const formBody = [];

      let success = true;

      formData.forEach((value, key) => {
         formBody.push({[key]: value});
      });

      try {
         someElem.forEach(elem => {
            const elemValue = elem.type === 'input' ? document.getElementById(elem.id).value :
                              elem.type === 'block' ? document.getElementById(elem.id).textContent : '';
   
            if (elemValue) formBody.push({[elem.id]: elemValue});
         });
      } catch (err) {console.log(err.message)}

      for (let i = 0; i < elements.length; i++) {
         const elem = elements[i];

         if (elem.name === 'fio') validation(elem, 'name', true);
         if (elem.name === 'phone') validation(elem, 'tel', true);

         if(elem.classList.contains('error')) success = false;
      }

      if (success) {
         submitData('https://jsonplaceholder.typicode.com/posts', formBody, 'POST').then(data => form.reset());
      }
   }

   document.body.addEventListener('submit', (e) => {
      if (e.target.closest('form')) {
         e.preventDefault();
         getData(e.target.closest('form'));
      }
   });
}

export default submitForm;