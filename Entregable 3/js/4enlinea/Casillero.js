"use strict"

class Casillero {
    
    constructor (px, py, fila, columna, circle){
        this.px = px;
        this.py = py;
        this.fila = fila;
        this.columna = columna;
        this.circle = circle;
        this.ocupado = false;       // para saber si el casillero ya se encuentra ocupado por una ficha
        this.fichaDeJugador = null; //para saber a qué jugador pertenece la ficha
    }

    // Retorna el nombre del jugador que ocupo el casillero
     getFichaDeJugador(){
        return this.fichaDeJugador;
    }

    //Setea el nombre del jugador que ocupo el casillero
    setFichaDeJugador(jugador){
        this.fichaDeJugador = jugador;
    }
    
    //Retorna la posición en X, en canva, del casillero
    getPosX(){
        return this.px;
    }

    //Retorna la posición en Y, en canva, del casillero
    getPosY(){
        return this.py;
    }

    //Retorna la posición en X e Y, en canva, del casillero
    getPosition() {
        return{
            x : this.getPosX(),
            y : this.getPosY()
        };
    }

   //Retorna la fila a la cual pertenece el casillero
    getFila(){
        return this.fila;
    }

    //Retorna la columna a la cual pertenece el casillero
    getCol(){
        return this.columna;
    }

    //Retorna la imagen que tiene el casillero
    getImg(){
        return this.img;
    }

    //Setea la imagen que tiene el casillero, para futuras modificaciones
    setImg(imagen){
    this.img = imagen;
    }

    //Retorna  si el casillero se encuentra ocupado por una ficha
    getOcupado(){
        return this.ocupado;
    }

    //Setea cuando el casillero se encuentra ocupado por una ficha
    setOcupado(ocupado){
        this.ocupado = ocupado;
    }
}