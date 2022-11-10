"use strict"

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
//let fichas = [];
let btnIniciar = document.getElementById("btnIniciar");
let btnReIniciar = document.getElementById("btnReIniciar");
btnIniciar.addEventListener("click", initJuego);
btnReIniciar.addEventListener("click", reIniciarJuego);
let fillF1 = document.getElementById("fichaJ1").value;
let fillF2 = document.getElementById("fichaJ2").value;

var partidaTermianda = false;
var filas = 8;
var columnas = 9;
var num_ganador = 4;
var cant_fichas = 5;
var tam_ficha = 50;
var radio = 25;
var margen_tablero = height - filas*tam_ficha;
let ancho_tablero = columnas * tam_ficha;
let inicio_tablero = width / 2 - (ancho_tablero / 2);
let tablero = new Tablero(ctx, width, height, filas, columnas);
let fichasj1 = [];
let fichasj2 = [];

var turnoJugadorUno = true;
var turnoJugadorDos = false;
var j1SetioFicha = false;
var j2SetioFicha = false;

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

//Configurarmos las variables del juego
function configurarJuego() {
    let select = elegirModo();
    filas = select[0];
    columnas = select[1];
    num_ganador = select[2];
    tam_ficha = select[3];
    radio = select[4];
}

//Chequear el valor del tam_ficha
function elegirModo(){
    let modo = document.getElementById("modojuego").value;
    let var_tablero = [];
    let filas, columnas, numero_ganador;
    
    if (modo == 4) {
        filas = 6;
        var_tablero.push(filas);
        columnas = 7;
        var_tablero.push(columnas);
        numero_ganador = 4;
        var_tablero.push(numero_ganador);
        tam_ficha = 60;
        var_tablero.push(tam_ficha);
        radio = 22;
        var_tablero.push(radio);

    } else if (modo == 5) {
        filas = 7;
        var_tablero.push(filas);
        columnas = 8;
        var_tablero.push(columnas);
        numero_ganador = 5;
        var_tablero.push(numero_ganador);
        tam_ficha = 58;
        var_tablero.push(tam_ficha);
        radio = 20;
        var_tablero.push(radio);

    } else if (modo == 6) {
        filas = 8;
        var_tablero.push(filas);
        columnas = 9;
        var_tablero.push(columnas);
        numero_ganador = 6;
        var_tablero.push(numero_ganador);
        tam_ficha = 49;
        var_tablero.push(tam_ficha);
        radio = 16;
        var_tablero.push(radio);

    } else if (modo == 7) {
        filas = 9;
        var_tablero.push(filas);
        columnas = 10;
        var_tablero.push(columnas);
        numero_ganador = 7;
        var_tablero.push(numero_ganador);
        tam_ficha = 45;
        var_tablero.push(tam_ficha);
        radio = 15.5;
        var_tablero.push(radio);
    } 

    return var_tablero;
  }

  //método que se llama cuando se hace click en  el button jugar
function initJuego() {

    fillF1 = document.getElementById("fichaJ1").value;
    fillF2 = document.getElementById("fichaJ2").value;
    //ocultamos boton jugar y select
    clearCanvas();
    document.getElementById('configuracionJuego').classList.add('ocultar');
    //mostramos el canvas
    document.getElementById('canvas-container').classList.remove('ocultar');  
    turnoJugadorUno = true;
    turnoJugadorDos = false;
    j1SetioFicha = false;
    j2SetioFicha = false;

    setTimeout(function(){
        //mostramos boton de reiniciar
        document.getElementById('timer').classList.remove('ocultar');
        btnReIniciar.classList.remove('ocultar');
        configurarJuego();
        tablero = new Tablero(ctx, width, height, filas, columnas);
        ancho_tablero = columnas * tam_ficha;
        inicio_tablero = width / 2 - (ancho_tablero / 2);
        margen_tablero = height - filas*tam_ficha;
        cant_fichas = 20;
        inicializarTablero(tablero);
    }, 400);
}

function inicializarTablero(tablero) {
    tablero.drawTablero();
    inicializarFichas();
    //drawFichas();   
}

//genera las fichas
function inicializarFichas(){
    fichasj1 = [];
    fichasj2 = [];
    let posicionYFichasJ1 = (filas-1/2)*tam_ficha + margen_tablero;
    let posicionYFichasJ2 = (filas-1/2)*tam_ficha + margen_tablero;
    for(i = 1; i <= cant_fichas/2; i++){
        //Generamos las fichas para el jugador1
        //console.log(fillF1);
        let ficha = new Ficha(inicio_tablero - 50, posicionYFichasJ1, radio, "green", ctx, "jugador1", fillF1);
        fichasj1.push(ficha);
        ficha.renderImg();
        posicionYFichasJ1 = posicionYFichasJ1 - 10;

    }

    for(i = 1; i <= cant_fichas/2; i++){
        //Generamos las fichas para e jugador2
        let ficha = new Ficha(ancho_tablero + inicio_tablero + 50, posicionYFichasJ2, radio, "red", ctx, "jugador2", fillF2);
        fichasj2.push(ficha);
        ficha.renderImg();
        posicionYFichasJ2 = posicionYFichasJ2 - 10;
    }

    drawFichas();
}


//se llama cuando se hace click en reiniciar juego
function reIniciarJuego() {
    btnReIniciar.classList.add('ocultar');
    setTimeout(function(){
        document.getElementById('configuracionJuego').classList.remove('ocultar');
        document.getElementById('timer').classList.add('ocultar');
        clearCanvas();
    }, 400);
    fichasj2 = [];
    fichasj1 = [];
}

function drawFichas(){
    clearCanvas();
    tablero.drawTablero();


    
    fichasj2.forEach(ficha=>{
        ficha.draw();
    });
    fichasj1.forEach(ficha=>{
        ficha.draw();
    });
    
}

function init(){
    drawFichas();
    initEvents(); 
    inicializarFichas();
}


function initEvents(){
    canvas.onmousedown = mouseDown;
    canvas.onmousemove = mouseMove;
    canvas.onmouseup = mouseUp;
}

function mouseDown(event){
    let x = event.layerX - event.currentTarget.offsetLeft; 
    let y = event.layerY - event.currentTarget.offsetTop;
    let UltimaFichaj1 = fichasj1.length-1;
    let UltimaFichaj2 = fichasj2.length-1;

    if(fichasj2[UltimaFichaj2].checkSelected(x, y) && turnoJugadorDos==true){
        fichasj2[UltimaFichaj2].setIsSelected(true);
    }else{
        fichasj2[UltimaFichaj2].setIsSelected(false);
    }

    if(fichasj1[UltimaFichaj1].checkSelected(x, y) && turnoJugadorUno==true){
        fichasj1[UltimaFichaj1].setIsSelected(true);
    }else{
        fichasj1[UltimaFichaj1].setIsSelected(false);
    }
}

function mouseMove(event){
    let x = event.layerX - event.currentTarget.offsetLeft; 
    let y = event.layerY - event.currentTarget.offsetTop;
    let UltimaFichaj1 = fichasj1.length-1;
    let UltimaFichaj2 = fichasj2.length-1;

    if(fichasj2[UltimaFichaj2].isSelected() && turnoJugadorDos==true ){
        
        fichasj2[UltimaFichaj2].move(x,y);  
        drawFichas();
    }

    if (fichasj1[UltimaFichaj1].isSelected() && turnoJugadorUno==true){
        
        fichasj1[UltimaFichaj1].move(x,y);
        drawFichas();
    }
}

function mouseUp(event) {
    let x = event.layerX - event.currentTarget.offsetLeft; 
    let y = event.layerY - event.currentTarget.offsetTop;
    let UltimaFichaj1 = fichasj1.length-1;
    let UltimaFichaj2 = fichasj2.length-1;

    if (x > inicio_tablero && x < (ancho_tablero+inicio_tablero) &&
        y > margen_tablero - (4*  radio) && y < (margen_tablero+radio) 
        && fichasj2[UltimaFichaj2].isSelected() && turnoJugadorDos==true) {
            turnoJugadorDos=false;
            turnoJugadorUno=true;     
            j1SetioFicha = true; 
            tablero.setFicha(x, fichasj2[UltimaFichaj2]);
            //fichasj2.shift(); 
            fichasj2.pop(UltimaFichaj2);
    }else{
        fichasj2[UltimaFichaj2].move(ancho_tablero + inicio_tablero + 50, (filas-1/2)*tam_ficha + margen_tablero);
    }

    if (x > inicio_tablero && x < (ancho_tablero+inicio_tablero) &&
        y > margen_tablero - (4*  radio) && y < (margen_tablero+radio) 
        && fichasj1[UltimaFichaj1].isSelected() && turnoJugadorUno==true) {
            turnoJugadorUno=false;
            turnoJugadorDos=true;
            j1SetioFicha = true;
            tablero.setFicha(x, fichasj1[UltimaFichaj1]);
            //fichasj1.shift();
            fichasj1.pop(UltimaFichaj1);
            
    }else{
        fichasj1[UltimaFichaj1].move(inicio_tablero - 50, (filas-1/2)*tam_ficha + margen_tablero);
    }   

    tablero.drawTablero();
    fichasj2[fichasj2.length-1].setIsSelected(false);
    fichasj1[fichasj1.length-1].setIsSelected(false);
    drawFichas();
    inicializarFichas();   
        
}

init();






 