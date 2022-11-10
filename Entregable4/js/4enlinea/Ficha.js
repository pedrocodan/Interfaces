"use strict"

class Ficha {

    //se crea el constructor de la ficha, con los parámetros necesarios para poder dibujarla en los diferentes casos que se presenten
    constructor(posX, posY, radius, fill, context, jugador, img) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        this.radius = radius;
        this.id;
        this.jugador = jugador;
        const imagen = new Image();
        this.img = img;
        imagen.src = img;
        this.imagen = imagen;
        this.cargoImg = false;
    }

    draw() {
        this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();

       if (this.img != undefined) {
            if (this.cargoImg) {
                this.context.drawImage(this.getImagen(), this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
            }
            else {
                //this.getImagen().onload = () => {
                this.context.drawImage(this.getImagen(), this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
                this.cargoImg = true;
            }
        }
        this.context.closePath();

    }

    renderImg() {
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.getImagen().onload = () => {
            this.context.drawImage(this.getImagen(), this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
        }
        this.cargoImg = true;
        this.context.closePath();
    }

    setJugador(jugador) {
        this.jugador = jugador;
    }

    getJugador() {
        return this.jugador;
    }

    setImg(img) {
        this.img = img;
    }

    getImagen() {
        return this.imagen;
    }

     //se determina si está dentro de la ficha o no
     checkSelected(x, y) {
        let _x = this.posX - x;//posicion del circulo - la posicion x donde esta el mouse
        let _y = this.posY - y ; //posicion del circulo - la posicion y donde esta el mouse
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
        
        //si la distancia es menor al radio, estoy adentro del circulo
    }

    isSelected(){
        return this.selected;
    }

    setIsSelected(selected){
        this.selected = selected;
    }

    move(x,y){
        this.posX = x ;
        this.posY = y; 
    }

}