(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let s=performance.now();requestAnimationFrame((function o(a){let l=(a-s)/n;l>1&&(l=1);let c=e(l);t(c),l<1&&requestAnimationFrame(o)}))},t=(e,t,n=!1)=>{let s=!1;if("num"===t)return e.value.replace(/[^0-9]/gi,"");"tel"===t&&(s=/^\+?(\d{11,16}$)/gi.test(e.value)),"name"===t&&(s=!/[^а-яa-z\s]/gi.test(e.value)),n&&""===e.value.trim()&&(s=!1),s?e.classList.remove("error"):e.classList.add("error")},n=(t,n,s)=>{const o=document.querySelector(n),a=document.querySelector(".overlay");o.style.transform="translate(-50%, -50%) scale(0)",a.style.opacity="0",document.body.addEventListener("click",(l=>{const c=l.target;c.closest(t)&&(l.preventDefault(),a.classList.add(`overlay-${o.classList[0]}`),o.style.display="block",a.style.display="block",e({duration:200,timing:e=>e,draw(e){o.style.transform=`translate(-50%, -50%) scale(${e})`,a.style.opacity=e}})),c.closest(t)||c.closest(n)&&!c.classList.contains(s)||(o.style.display="",o.style.transform="translate(-50%, -50%) scale(0)",a.classList.contains(`overlay-${o.classList[0]}`)&&(a.style.display="none",a.style.opacity="0"),a.classList.remove(`overlay-${o.classList[0]}`))}))},s=(t,n,s,o,a)=>{const l=document.querySelectorAll(t),c=document.querySelector(n);let r=a,i=0;const d=()=>{r=window.innerWidth<576?1:a,l.forEach((e=>{e.style.display="none"}));for(let t=0;t<r;t++){const n=l[i+t];n.style.display="block",e({duration:200,timing:e=>e,draw(e){n.style.transform=`scale(${e})`}})}};c.addEventListener("click",(e=>{const t=e.target;t.closest(o)&&(i+=r,i>=l.length-1&&(i=0),d()),t.closest(s)&&(i-=r,i<0&&(i=l.length-r),d())})),d(),window.addEventListener("resize",d)};n("#header .btn",".header-modal","header-modal__close"),n(".service-button .btn",".services-modal","services-modal__close"),s(".benefits__item",".benefits-arrows",".benefits__arrow--left",".benefits__arrow--right",3),s(".service-block",".services-arrows",".services__arrow--left",".services__arrow--right",2),(()=>{const e=document.getElementById("offer"),t=document.querySelector(".smooth-scroll"),n=e.offsetTop+e.offsetHeight,s=()=>{t.style.display=window.scrollY<n?"none":"block"};t.addEventListener("click",(()=>window.scrollTo({top:0,behavior:"smooth"}))),window.addEventListener("scroll",s),s()})(),(()=>{const e=document.getElementById("documents"),t=e.innerHTML;e.addEventListener("click",(s=>{const o=s.target;if(o.closest(".sertificate-document")){s.preventDefault();const a=o.closest(".sertificate-document").getAttribute("href");e.innerHTML=t,(t=>{const n=document.createElement("div");n.classList.add("doc-modal"),n.innerHTML=`\n      <img style="max-width: 100%; max-height: 100%" src="${t}"/>\n      <span style="position: absolute;\n      top: 0;\n      right: 0;\n      font-size: 36px;\n      cursor: pointer;" title="Close" class="doc-modal__close">x</span>\n      `,n.style.cssText="\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%) scale(0);\n            z-index: 9999;\n            height: 100%;\n         ",e.append(n)})(a),n(".sertificate-document",".doc-modal","doc-modal__close")}}))})(),(e=>{const t=document.querySelectorAll(".countdown"),n=e=>e>=10?e:`0${e}`,s=(t,o,a,l)=>{const c=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{dateRemaining:t,days:n(Math.floor(t/60/60/24)%24),hours:n(Math.floor(t/60/60)%60),minutes:n(Math.floor(t/60)%60),seconds:n(Math.floor(t)%60)}})();if(c.dateRemaining<0)return t.textContent="00",o.textContent="00",a.textContent="00",void(l.textContent="00");t.textContent=c.days,o.textContent=c.hours,a.textContent=c.minutes,l.textContent=c.seconds,setInterval((()=>{s(t,o,a,l)}),1e3)};t.forEach((e=>{const t=e.querySelector(".count_1 > span"),n=e.querySelector(".count_2 > span"),o=e.querySelector(".count_3 > span"),a=e.querySelector(".count_4 > span");s(t,n,o,a)}))})("01.01.2024"),(e=>{const n=document.getElementById("calc"),s=document.getElementById("calc-type"),o=document.getElementById("calc-type-material"),a=document.getElementById("calc-input"),l=document.getElementById("calc-total");try{n.addEventListener("input",(n=>{const c=n.target;"SELECT"!==c.tagName&&"INPUT"!==c.tagName||(isNaN(s.value)||isNaN(o.value)?l.value="":l.value=(a.value=t(a,"num"),e*s.value*o.value*a.value))}))}catch(e){e.message}})(1e3),((e=[])=>{document.body.addEventListener("submit",(n=>{n.target.closest("form")&&(n.preventDefault(),(n=>{const s=new FormData(n),o=n.elements,a=[];let l=!0;s.forEach(((e,t)=>{a.push({[t]:e})}));try{e.forEach((e=>{const t="input"===e.type?document.getElementById(e.id).value:"block"===e.type?document.getElementById(e.id).textContent:"";t&&a.push({[e.id]:t})}))}catch(e){console.log(e.message)}for(let e=0;e<o.length;e++){const n=o[e];"fio"===n.name&&t(n,"name",!0),"phone"===n.name&&t(n,"tel",!0),n.classList.contains("error")&&(l=!1)}var c;l&&(c=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c)}).then((e=>e.json()))).then((e=>n.reset()))})(n.target.closest("form")))}))})([{id:"calc-total",type:"input"}])})();