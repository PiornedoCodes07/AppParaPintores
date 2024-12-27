const iconNavBar = document.getElementById("navIcon");
const navBar = document.getElementById("navBar");
const main = document.getElementById("main");

iconNavBar.addEventListener("click", function () {
    if (navBar.style.display == "none"){
        navBar.style.display = "flex";
        main.style.filter = "blur(3px)";
    }
    else{
        navBar.style.display = "none";
        main.style.filter = "blur(0px)";
    }
})