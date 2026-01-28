'use strict';
let cart = [];

document.getElementById('subscribe-form').onsubmit = function (e) {
    e.preventDefault();
    alert('Подписка оформлена');
};

document.querySelectorAll('.btn').forEach(btn => {
    if (btn.textContent.includes('В корзину')) {
        btn.onclick = function () {
            this.textContent = 'Добавлено';
            this.style.background = 'gray';
        };
    }
});

document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function () {
        document.querySelectorAll('nav a').forEach(l => l.style.color = '');
        this.style.color = 'red';
    };
});

window.onload = function () {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
};