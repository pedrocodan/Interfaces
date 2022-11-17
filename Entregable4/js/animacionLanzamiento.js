"use strict"
"use strict"

let menuBurger = document.getElementById('btn-menu');
let cruz = document.getElementById('cruz');

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var nav = document.querySelector("nav");
    var cruz = document.querySelector("#span");
    header.classList.toggle("scrolling", window.scrollY>0);
    nav.classList.toggle("scrolling",window.scrollY>0);
    //cruz.classList.toggle("scrolling",window.scrollY>0 );
    
})

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuBurger.classList.toggle('not-active');
    document.getElementById('divMenuHamburguesa').classList.toggle('nav-active');
    
});
let nav =  document.getElementById('nav');
document.getElementById('btn-menu').addEventListener('click', () => {
    nav.classList.toggle('show');
    if(nav.classList.contains("site-nav-open")) {
        nav.classList.remove("site-nav-open");
        nav.classList.add("site-nav-closed");
    } else {
        nav.classList.remove("site-nav-closed");
        nav.classList.add("site-nav-open");
    }
});

document.getElementById('btn-profile').addEventListener('click', () => {
    document.getElementById('nav-profile').classList.toggle('show-profile');
});


var btnScrollTop = document.querySelector("#scrollToTop");
btnScrollTop.addEventListener("click", () => {
    window.scrollTo(0,0);
})


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
                    let urlImgHover = imagen.getAttribute('src').replace('.png','_hover.png');
                    imagen.setAttribute('src',urlImgHover);
                }
            }, 200);
        });
    
        juego.addEventListener('mouseleave', (e) => {
            var elemento = e.currentTarget;
            setTimeout(() => {
                elemento.classList.remove('hover');
                let imagen = elemento.querySelector('img');
                let urlImg = imagen.getAttribute('src').replaceAll('_hover.png','.png');
                imagen.setAttribute('src', urlImg);
            }, 200);
        });
    });
}

function renderHovers() {
    renderHover(1);
}

function renderDesktop() {
    let sectionCarruseles = document.querySelector('.section-carruseles');
    let imagenes = sectionCarruseles.querySelectorAll('img');
    imagenes.forEach(img => {
        let src = img.getAttribute('src').replaceAll('_hover.png','.png');
        img.setAttribute('src', src);
    });
}

generarFlechas();
renderHovers();
renderIndicadores(5);
renderDesktop();

const parallax = document.querySelector(".lanzamiento-main");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.1 + "px";
})

/* ENTRADA DE IMAGENES POR LOS COSTADOS */ 
function reveal() {
    var reveals = document.querySelectorAll(".mapa-juego");


    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 240;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");//clase que hace efecto de entrada
            reveals[i].classList.remove("goodbye");//clase que hace efecto de irse
            if (i%2==0){
                reveals[i].classList.add("fade-left");
                reveals[i].classList.remove("bye-left");
            }else{
                reveals[i].classList.add("fade-right");
                reveals[i].classList.remove("bye-right");
            }
        } else {
            reveals[i].classList.remove("active");//clase que hace efecto de entrada
            reveals[i].classList.add("goodbye");//clase que hace efecto de irse
            if (i%2==0){
                reveals[i].classList.remove("fade-left");
                reveals[i].classList.add("bye-left");
            }else{
                reveals[i].classList.remove("fade-right");
                reveals[i].classList.add("bye-right");
            }
        }
    }
  }
  
  window.addEventListener("scroll", reveal);

  window.addEventListener("scroll", function() {

    let distance = window.scrollY;
    let opacidadActual = document.querySelector(".lanzamiento-inicio-pubg").style.opacity
    document.querySelector(".lanzamiento-inicio-pubg").style.opacity =1
    if(distance>0){
        document.querySelector(".lanzamiento-inicio-pubg").style.transform = `translateY(${distance *0.66}px)`;
        document.querySelector(".lanzamiento-pubg-logo").style.transform = `translateY(${distance * (-0.3)}px)`;
        //document.querySelector(".lanzamiento-main-div").style.transform = `translateY(0px)`;
        document.querySelector(".lanzamiento-inicio-pubg").style.opacity = opacidadActual*0.95;   
    }
    if (distance>800){
        document.querySelector(".lanzamiento-inicio-pubg").style.opacity = 1;
    }
  })


