// var action = document.querySelector('.action');
var mobileMenu = document.querySelector('#mobile-menu');
var menuIcon = document.querySelector('#menu-icon');
var closeIcon = document.querySelector('#close-icon');

// action.addEventListener("click", function(){
//     mobileMenu.classList.toggle('reset');

//     if (mobileMenu.classList.contains('reset')) {
//         menuIcon.style.display = "none"
//         closeIcon.style.display ="block"
//     }
//     e
//         menuIcon.style.display = "block"
//         closeIcon.style.display = "none"
//     }
// })



function openBtn(){
    document.querySelector("#mobile-menu").style.display = "block";
    document.querySelector("#menu-icon").style.display = "none";
    document.querySelector("#close-icon").style.display = "block";

}




function closeBtn(){
    document.querySelector("#mobile-menu").style.display = "none";
    document.querySelector("#menu-icon").style.display = "block";
    document.querySelector("#close-icon").style.display = "none";

}


