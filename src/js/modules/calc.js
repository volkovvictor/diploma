import {validation} from './helpers';

const calc = (price) => {
   const calcSection = document.getElementById('calc');
   const calcType = document.getElementById('calc-type');
   const calcTypeMaterial = document.getElementById('calc-type-material');
   const calcInput = document.getElementById('calc-input');
   const calcTotal = document.getElementById('calc-total');

   const calcValues = () => {
      calcInput.value = validation(calcInput, 'num');
      return price * calcType.value * calcTypeMaterial.value * calcInput.value;
   }

   try {
      calcSection.addEventListener('input', (e) => {
         const target = e.target;
   
         if(target.tagName !== 'SELECT' && target.tagName !== 'INPUT') return;
   
         !isNaN(calcType.value) && !isNaN(calcTypeMaterial.value) ? calcTotal.value = calcValues() : calcTotal.value = '';
      });
   } catch(err) {err.message}
}

export default calc;