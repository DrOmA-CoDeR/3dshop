'use strict';
let but = document.querySelectorAll('.btn'); //кнопки

function change() {
    but.forEach(b => {  //для всех применение
        b.addEventListener('click', function() { //евентлистенер
            b.classList.toggle('btnon');
        });
    });
}

change();