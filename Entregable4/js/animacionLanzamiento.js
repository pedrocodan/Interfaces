"use strict"

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
    let distance = window.scrollY
    document.querySelector(".lanzamiento-inicio-pubg").style.transform = `translateY(${distance *0.66}px)`
    document.querySelector(".lanzamiento-pubg-logo").style.transform = `translateY(${distance * (-0.3)}px)`
  })
