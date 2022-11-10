"use strict"

class Tablero {

    constructor(ctx, width, height, filas, columnas, inicio_tablero) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;       
        this.casilla = null;
        this.matriz = [];
        this.inicio_tablero = inicio_tablero;
        this.crearMatriz();
    }


    drawTablero() {
        let iniciox = inicio_tablero;
        for(let i = 0; i < this.columnas; i++) {
            for(let j = 0; j < this.filas; j++) {
                let px = iniciox + tam_ficha/2 + i*tam_ficha;
                let py = margen_tablero + j*tam_ficha + tam_ficha/3;
                ctx.fillStyle = "grey";
                ctx.fillRect(iniciox + i*tam_ficha, py - tam_ficha/2 , tam_ficha, tam_ficha);
                this.ctx.beginPath();
                let ficha = new Ficha(px, py, radio, this.matriz[i][j].fill, this.ctx, this.matriz[i][j].jugador, this.matriz[i][j].img)
                ficha.draw();
                this.ctx.closePath(); 
            }
        }
    }

    crearMatriz(){
        for(let i = 0; i < this.columnas; i++) {
            this.matriz[i] = new Array(this.filas);
            for(let j = 0; j < this.filas; j++) {
                let px = this.inicio_tablero + tam_ficha/2 + i*tam_ficha;
                let py = margen_tablero + j*tam_ficha;
                this.matriz[i][j] = new Ficha(px, py, radio, "white", this.ctx);
            }
        }
    }


    setFicha(x, ficha){
        let posX = parseInt((x-inicio_tablero)/(tam_ficha));
        let filaElegida = this.matriz[posX];
        let posY = filas-1;
        while (posY>0 && filaElegida[posY].fill!= "white"){
            posY--;
        }
        if (posY>=0 && filaElegida[posY].fill == "white"){
            filaElegida[posY] = ficha;
        }
        if(this.checkGanador(posX, posY, ficha.jugador)){
            partidaTermianda = true;
            console.log(turnoJugadorDos + 'j2 en setFicha');
            console.log(turnoJugadorUno + 'j1 en setFicha');
            setTimeout(function(){
                swal({  title: "Partida terminada!",
                        text:  "Ganador: " + ficha.jugador,
                        icon: ficha.img
                    });
            }, 100);
            turnoJugadorUno = false;
            turnoJugadorDos = false;    
           // console.log(turnoJugadorDos);
            // console.log(turnoJugadorUno);        
        }
    }

    checkGanador(x,y,jugador){
        let modo = num_ganador; //guardo que version del juego es
        if (this.checkHorizontal(y,modo, jugador)
         || this.checkVertical(x,modo, jugador) 
         || this.checkDiagonalUno(x,y,modo,jugador)
         || this.checkDiagonalDos(x,y,modo,jugador))
            {
            return true
        }
        return false;
    }

    checkHorizontal(fila,modo, jugador){
        let hayGanador = false
        let col =0;
        let cant =0;
        while (col < this.columnas && hayGanador == false) {
            if(this.matriz[col][fila].jugador == jugador && cant < modo) {
                cant++;
            }else{
            cant = 0;
            }
            if (cant == modo) {
                hayGanador = true;
            }
            col++;
      
        }
        return hayGanador;
    }

    checkVertical(col,modo, jugador){
        let hayGanador = false
        let fila =0;
        let cant =0;
        while (fila < this.filas && hayGanador == false) {
            if(this.matriz[col][fila].jugador == jugador && cant < modo) {
                cant++;
            }else{
            cant = 0;
            }
            if (cant == modo) {
                hayGanador = true;
            }
            fila++;
      
        }
        return hayGanador;
    }

    checkDiagonalUno(col,fila,modo,jugador){
        let hayGanador = false;
        let cant=0;
        while (fila>0 && col>0){//llevo fila y columna a la primer posición de la diagonal (arriba a la izquierda)
            fila--;
            col--;
        }
        while (fila < this.filas && col <this.columnas && hayGanador == false) {
            if(this.matriz[col][fila].jugador == jugador && cant < modo) {
                cant++;
            }else{
                cant = 0;
            }
            if (cant == modo) {
                hayGanador = true;
            }
            fila++;
            col++;
        }
        return hayGanador;
    }

    checkDiagonalDos(col,fila,modo,jugador){
        let hayGanador = false;
        let cant=0;
        while (fila>0 && col<columnas-1){//llevo fila y columna a la primer posición de la diagonal (arriba a la derecha)
            fila--;
            col++;
        }
        while (fila < this.filas && col >=0 && hayGanador == false) {
            if(this.matriz[col][fila].jugador == jugador && cant < modo) {
                cant++;
            }else{
                cant = 0;
            }
            if (cant == modo) {
                hayGanador = true;
            }
            
            fila++;
            col--;
        }
        return hayGanador;
    }
}