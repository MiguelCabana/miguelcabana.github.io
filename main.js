'use strict'

window.addEventListener('load' , () => {

    let mobileMenu = document.getElementById("mobile-menu");
    let buttonMovil = document.getElementById("button-movil");

    let counter = 0;

    buttonMovil.addEventListener('click' , () => {
        if(counter === 0) {
            mobileMenu.style.display = "flex";
            counter = 1;
            console.log("click flex");
        }else{
            counter = 0;
            mobileMenu.style.display = "none";
            console.log("click none")
  
        }
    })

});