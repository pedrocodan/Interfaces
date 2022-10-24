var porcentaje = document.querySelector(".porcentaje");

const loader = document.querySelector(".loader-container");


const main = document.querySelector(".main");

var progreso = 0;



function init(){
    setTimeout(() =>{
        loader.style.opacity = 0;
        loader.style.display = "none";

        main.style.display = "block";
        setTimeout(()=>(main.style.opacity = 1), 50);
    }, 2300)
}
init();


function move(){
    setInterval(addFrame, 20) ;
    function addFrame(){
        if(progreso < 100){
            progreso = progreso + 1;
            porcentaje.innerHTML = progreso+"%";
        }
        
    }
}

move();