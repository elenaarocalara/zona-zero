//MENÚ

//animacion del icono del menu
function animar() {
   "use strict";
   document.getElementById("icono").classList.toggle("cambiar");
}


//MENÚ HAMBURGUESA

function openMenu() {
   "use strict";
   animar();
   document.getElementById("menu").style.left = "0";
   document.getElementById("icono").style.transform = "translate(130px, 0)";
}

function closeMenu() {
   "use strict";
   animar();
   document.getElementById("menu").style.left = "-100%";
   document.getElementById("icono").style.transform = "translate(0px)";


}

function menu() {
   "use strict";
   if (document.getElementById("menu").style.left === "0px") {
       closeMenu();
   } else {
       openMenu();
   }
}

//-------------------------------------------------------------- MENÚ

