let btn = document.querySelector("#btnIniciar").addEventListener("click", starTime);
let btnReiniciar = document.querySelector("#btnReIniciar").addEventListener("click", stop);
let timer = document.querySelector("#timer");

turnoJugadorDos ;
turnoJugadorUno ;
let iniciar;

let tiempo = 300;
function starTime(){  
    tiempo = 300; 
    timer.innerHTML = "Tiempo restante: " + tiempo;
    iniciar = setInterval(actualizaTiempo, 1000);
}


function stop(){
    tiempo = 300;
    clearInterval(iniciar);
}

function actualizaTiempo(){
    timer.innerHTML = "Tiempo restante: " + tiempo;
    tiempo--;
    if(partidaTermianda) {
        stop();
        partidaTermianda = false;
        timer.innerHTML = "";
    }
    if(tiempo == 0) {
        stop();
        timer.innerHTML = 'Partida terminada';
        turnoJugadorUno = false;
        turnoJugadorDos = false;
    }
}