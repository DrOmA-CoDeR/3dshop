'use strict';
let but = document.querySelectorAll('.btn'); //кнопки

function change(event) {  // добавил параметр event
    event.preventDefault(); // предотвращаем стандартное поведение
    but.forEach(b => {
        b.classList.toggle('btnon');
    });
}

but.forEach(btn => {
    btn.addEventListener('click', change);
});