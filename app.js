'use strict';
let but = document.querySelectorAll('.btn'); //кнопки

function change(event) {  // добавил параметр event
    but.forEach(b => {
        b.classList.toggle('btnon');
    });
}

but.forEach(btn => {
    btn.addEventListener('click', change);
});