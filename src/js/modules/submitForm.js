import {validation} from './helpers';

const submitForm = (form, someElem = []) => {
   const actionForm = document.querySelector(form);

   const submitData = (url, data, method) => {
      return fetch(url, {
         method: method,
         body: JSON.stringify(data),
      }).then(res => res.json())
   }

   const getData = () => {
      const formData = new FormData(actionForm);
      const elements = actionForm.elements;
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

         success = elem.name === 'fio' ? validation(elem, 'name', true) : 
                  elem.name === 'phone' ? validation(elem, 'tel', true) : success;
      }

      if (success) {
         submitData('https://jsonplaceholder.typicode.com/posts', formBody, 'POST').then(data => actionForm.reset());
      }
   }

   actionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      getData();
   });
}

export default submitForm;