import popup from './modules/popup';
import slider from './modules/slider';

popup('#header .btn', '.header-modal', 'header-modal__close');
popup('.service-button .btn', '.services-modal', 'services-modal__close');
slider('.benefits__item', '.benefits-arrows', '.benefits__arrow--left', '.benefits__arrow--right', 3);
slider('.service-block', '.services-arrows', '.services__arrow--left', '.services__arrow--right', 2);