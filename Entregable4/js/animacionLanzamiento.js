"use strict"

const parallax = document.querySelector(".lanzamiento-main");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.1 + "px";
})

function reveal() {
    var reveals = document.querySelectorAll(".mapa-juego");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
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
