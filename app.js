'use strict';
let but = document.querySelectorAll('.btn'); //кнопки
but.forEach(but => (
    but.classList.toggle('.btnon');
))