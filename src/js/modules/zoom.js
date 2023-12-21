import popup from './popup';

const zoom = () => {
   const documents = document.getElementById('documents');
   const documentsHTML = documents.innerHTML;

   const createModal = (href) => {
      const modal = document.createElement('div');

      modal.classList.add('doc-modal');
      modal.innerHTML = `
      <img style="max-width: 100%; max-height: 100%" src="${href}"/>
      <span style="position: absolute;
      top: 0;
      right: 0;
      font-size: 36px;
      cursor: pointer;" title="Close" class="doc-modal__close">x</span>
      `;

      modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            z-index: 9999;
            height: 100%;
         `;

         documents.append(modal);
   }

   documents.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.sertificate-document')) {
         e.preventDefault();
         const curDocument = target.closest('.sertificate-document');
         const href = curDocument.getAttribute('href');
   
         documents.innerHTML = documentsHTML;

         createModal(href);

         popup('.sertificate-document', '.doc-modal', 'doc-modal__close');
      }
   });
}

export default zoom;