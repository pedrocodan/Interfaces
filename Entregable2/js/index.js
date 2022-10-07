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

function generarFlecha(id) {
    var flechaizquierda = document.getElementById('flecha-izquierda-' + id);
    var flechaderecha = document.getElementById('flecha-derecha-' + id);
    var fila = document.getElementById('contenedor-carrusel-' + id);
    var indicadores = document.getElementById('indicadores-' + id);
    var juegos = document.getElementById('carrusel-' + id).querySelectorAll('.juego');

    flechaizquierda.addEventListener('click', () => {
        flechaizquierda.classList.add('flecha-oculta');
    
        fila.scrollLeft -= fila.offsetWidth;
    
        const indicadoractivo = indicadores.querySelector('.indicadores .activo');
        
        if(indicadoractivo.previousSibling?.tagName == 'BUTTON') {
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
    
        const indicadoractivo = indicadores.querySelector('.indicadores .activo');
        if(indicadoractivo.nextSibling){
            indicadoractivo.nextElementSibling.classList.add('activo');
            indicadoractivo.classList.remove('activo');
        }
    
        juegos.forEach(juego => juego.classList.remove('hover'));
     
        setTimeout(() => {
            flechaderecha.classList.remove('flecha-oculta');
        }, 500);
    });
}

function generarFlechas() {
    generarFlecha(1);
    generarFlecha(2);
}

function renderIndicador(id, imagenesXpagina) {
    var juegos = document.getElementById('carrusel-' + id).querySelectorAll('.juego');
    var numeroPag = Math.ceil(juegos.length / imagenesXpagina);

    var div = document.getElementById('indicadores-' + id);
    var fila = document.getElementById('contenedor-carrusel-' + id);
    div.innerHTML = '';

    for (let i = 0; i < numeroPag; i++) {
        const indicator = document.createElement('button');
    
        if (i == 0) {
            indicator.classList.add('activo');
        }
        
        div.appendChild(indicator);  
        indicator.addEventListener('click', (e) => {
            fila.scrollLeft = i * fila.offsetWidth;  
            div.querySelector('.indicadores .activo').classList.remove('activo');
            e.target.classList.add('activo');
        });
    }
}

function renderIndicadores (imagenesXpagina){
    renderIndicador(1, imagenesXpagina);
    renderIndicador(2, imagenesXpagina);
}

function renderHover (id) {
    var juegos = document.getElementById('carrusel-' + id).querySelectorAll('.juego');

    juegos.forEach((juego) => {
        juego.addEventListener('mouseenter', (e) => {
            var elemento = e.currentTarget;
            setTimeout(() => {
                juegos.forEach(juego => juego.classList.remove('hover'));
                elemento.classList.add('hover');
    
                let imagen = elemento.querySelector('img');
                if(!imagen.getAttribute('src').includes('_hover')) {
                    //Solo para desktop
                    //Reemplazamos la img sin hover por la con hover
                    let urlImgHover = imagen.getAttribute('src').replace('.','_hover.');
                    imagen.setAttribute('src',urlImgHover);
                }
            }, 200);
        });
    
        juego.addEventListener('mouseleave', (e) => {
            var elemento = e.currentTarget;
            setTimeout(() => {
                elemento.classList.remove('hover');
                let imagen = elemento.querySelector('img');
                let urlImg = imagen.getAttribute('src').replaceAll('_hover','');
                imagen.setAttribute('src', urlImg);
            }, 200);
        });
    });
}

function renderHovers() {
    renderHover(1);
    renderHover(2);
}

function renderDesktop() {
    let sectionCarruseles = document.querySelector('.section-carruseles');
    let imagenes = sectionCarruseles.querySelectorAll('img');
    imagenes.forEach(img => {
        let src = img.getAttribute('src').replaceAll('_hover','');
        img.setAttribute('src', src);
    });
}

function renderMobile() {
    let sectionCarruseles = document.querySelector('.section-carruseles');
    let imagenes = sectionCarruseles.querySelectorAll('img');

    imagenes.forEach(img => {
        if(!img.getAttribute('src').includes('_hover')) {
            let urlImgHover = img.getAttribute('src').replace('.','_hover.');
            img.setAttribute('src',urlImgHover);
        }
    });
}

const mediaQuery1 = window.matchMedia("(max-width: 450px)");
const mediaQuery4 = window.matchMedia("(min-width: 451px)");

function handleTabletChange1(e) {
    if (e.matches) {
        renderIndicadores(2);
        renderMobile();
    }
}
  
function handleTabletChange4(e) {
    if (e.matches) {
        renderIndicadores(5);
        renderDesktop();
    }
}

renderIndicadores(5);
generarFlechas();
renderHovers();

// Register event listener
mediaQuery1.addListener(handleTabletChange1);
mediaQuery4.addListener(handleTabletChange4);




let footer = document.getElementById('fat_footer');
console.log(footer);
let footer_menu = footer.querySelectorAll('.fatFooter-category');
console.log(footer_menu);

for (var i = 0; i < footer_menu.length; i++) {
    footer_menu[i].addEventListener('click', (e) => {
        e.target.firtChild.classList.toggle('showCategory');
    });

}
