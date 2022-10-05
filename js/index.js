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
