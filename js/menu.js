  

// document.getElementById("barIcon").onclick = function() {display()};

// function display() {
//    document.getElementById("nav-Items").classList.toggle("show");
// }



function openNav(){
   document.querySelector(".overlay").style.width = "100%";
   document.querySelector(".bar-icon").classList.toggle("show");
   document.querySelector("body").style.overflow = "hidden";
   

}

function closeNav(){
   document.querySelector(".overlay").style.width = "0%";
   document.querySelector(".topNav").classList.remove("show");
   document.querySelector("body").style.overflow = "auto";



}