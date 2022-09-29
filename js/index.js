"use strict"

document.getElementById('btn-menu').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('show');
});

document.getElementById('btn-profile').addEventListener('click', () => {
    document.getElementById('nav-profile').classList.toggle('show-profile');
});

