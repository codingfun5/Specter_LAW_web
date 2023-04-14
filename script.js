window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#hamburger_menu, .nav_menu");
const section = document.querySelector("section");



hamburger.addEventListener("click", onClickMenu);
    

function onClickMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    section.classList.toggle("active");

}