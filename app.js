'use strict';
let but = document.querySelectorAll('.btn'); //кнопки
function change() {
    but.forEach(but =>
        but.classList.toggle('.btnon') //смена класса
    );
}
change()