import popup from './modules/popup';
import slider from './modules/slider';
import scroll from './modules/scroll';
import zoom from './modules/zoom';
import timer from './modules/timer';
import calc from './modules/calc';

popup('#header .btn', '.header-modal', 'header-modal__close');
popup('.service-button .btn', '.services-modal', 'services-modal__close');
slider('.benefits__item', '.benefits-arrows', '.benefits__arrow--left', '.benefits__arrow--right', 3);
slider('.service-block', '.services-arrows', '.services__arrow--left', '.services__arrow--right', 2);
scroll();
zoom();
timer('01.01.2024');
calc(1000);