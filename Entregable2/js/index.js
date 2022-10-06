"use strict"

document.getElementById('btn-menu').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('show');
});

document.getElementById('btn-profile').addEventListener('click', () => {
    document.getElementById('nav-profile').classList.toggle('show-profile');
});


var i = 0;
window.onload = move();

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var contenedor = document.getElementById("myProgress")
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                document.getElementById("myProgress").classList.add("borrar");
                document.getElementById("paginaCargandoDeFondo").classList.remove("borrar");
            } else {

                width++;
                var porcen = document.createElement("p");
                var text = document.createTextNode(width + "%");
                porcen.appendChild(text);
                elem.appendChild(porcen);
                elem.style.width = width + "%";
                porcen.setAttribute("id", "porcentaje"+ (width));
                document.getElementById("porcentaje" + (width-1)).classList.add("borrar");
                document.getElementById("paginaCargandoDeFondo").classList.add("borrar");
            }
        } 
    }
}
var btnScrollTop = document.querySelector("#scrollToTop");
btnScrollTop.addEventListener("click", () => {
    window.scrollTo(0,0);
})

















































/*CARRUSELES */// Adaptado para un id 1

const fila = document.getElementById('contenedor-carrusel-1');
const juegos = document.getElementById('carrusel-1').querySelectorAll('.juego');

const flechaizquierda = document.getElementById('flecha-izquierda-1');
const flechaderecha = document.getElementById('flecha-derecha-1');

flechaizquierda.addEventListener('click', () => {
    flechaizquierda.classList.add('flecha-oculta');

    fila.scrollLeft -= fila.offsetWidth;

    const indicadoractivo = document.getElementById('indicadores-1').querySelector('.indicadores .activo');
    if(indicadoractivo.previousSibling){
        indicadoractivo.previousSibling.classList.add('activo');
        indicadoractivo.classList.remove('activo');
    }

    juegos.forEach(juego => juego.classList.remove('hover'));

    setTimeout(() => {
        flechaizquierda.classList.remove('flecha-oculta');
    }, 500);
});

flechaderecha.addEventListener('click', () => {
    flechaderecha.classList.add('flecha-oculta');

    fila.scrollLeft += fila.offsetWidth;

    const indicadoractivo = document.getElementById('indicadores-1').querySelector('.indicadores .activo');
    if(indicadoractivo.nextSibling){
        indicadoractivo.nextElementSibling.classList.add('activo');
        indicadoractivo.classList.remove('activo');
    }

    juegos.forEach(juego => juego.classList.remove('hover'));
 
    setTimeout(() => {
        flechaderecha.classList.remove('flecha-oculta');
    }, 500);
});

const numeroPaginas = Math.ceil(juegos.length / 5);

/*function renderImagenes(imagenesXGrupo) {
    let pag = Math.ceil(juegos.length / imagenesXGrupo);
    juegos.forEach(juego => {
        let ul = document.createElement("div");
        ul.classList.add("juego");
        
    });
}*/

for (let i = 0; i < numeroPaginas; i++) {
    const indicator = document.createElement('button');

    if (i == 0) {
        indicator.classList.add('activo');
    }

    document.getElementById('indicadores-1').appendChild(indicator);


    indicator.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.getElementById('indicadores-1').querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

juegos.forEach((juego) => {
    juego.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            juegos.forEach(juego => juego.classList.remove('hover'));
            elemento.classList.add('hover');

            console.log(elemento);
        }, 100);
    });
});

fila.addEventListener('mouseleave', () => {
    juegos.forEach(juego => juego.classList.remove('hover'));

});


// Adaptado para un id 2

const fila2 = document.getElementById('contenedor-carrusel-2');
const juegos2 = document.getElementById('carrusel-2').querySelectorAll('.juego');

const flechaizquierda2 = document.getElementById('flecha-izquierda-2');
const flechaderecha2 = document.getElementById('flecha-derecha-2');

flechaizquierda2.addEventListener('click', () => {
    flechaizquierda2.classList.add('flecha-oculta');

    fila2.scrollLeft -= fila2.offsetWidth;

    const indicadoractivo = document.getElementById('indicadores-2').querySelector('.indicadores .activo');
    if(indicadoractivo.previousSibling) {
        indicadoractivo.previousSibling.classList.add('activo');
        indicadoractivo.classList.remove('activo');
    }

    juegos2.forEach(juego => juego.classList.remove('hover'));

    setTimeout(() => {
        flechaizquierda2.classList.remove('flecha-oculta');
    }, 500);
});

flechaderecha2.addEventListener('click', () => {
    flechaderecha2.classList.add('flecha-oculta');

    fila2.scrollLeft += fila2.offsetWidth;

    const indicadoractivo = document.getElementById('indicadores-2').querySelector('.indicadores .activo');
    if(indicadoractivo.nextSibling){
        indicadoractivo.nextElementSibling.classList.add('activo');
        indicadoractivo.classList.remove('activo');
    }

    juegos2.forEach(juego => juego.classList.remove('hover'));
 
    setTimeout(() => {
        flechaderecha2.classList.remove('flecha-oculta');
    }, 500);
});

const numeroPaginas2 = Math.ceil(juegos2.length / 5);

/*function renderImagenes(imagenesXGrupo) {
    let pag = Math.ceil(juegos.length / imagenesXGrupo);
    juegos.forEach(juego => {
        let ul = document.createElement("div");
        ul.classList.add("juego");
        
    });
}*/

for (let i = 0; i < numeroPaginas2; i++) {
    const indicator1 = document.createElement('button');

    if (i == 0) {
        indicator1.classList.add('activo');
    }

    document.getElementById('indicadores-2').appendChild(indicator1);

    indicator1.addEventListener('click', (e) => {
        fila2.scrollLeft = i * fila2.offsetWidth;

        document.getElementById('indicadores-2').querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

juegos2.forEach((juego) => {
    juego.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            juegos2.forEach(juego => juego.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 100);
    });
});

fila2.addEventListener('mouseleave', () => {
    juegos2.forEach(juego => juego.classList.remove('hover'));
});