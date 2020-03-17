// SCRIPT FOR INDEX.HTML

function toggle(img) {
    var menu = document.getElementsByClassName("menu")[0];
    var nav = document.getElementsByTagName("nav")[0];
    var hamburger = document.getElementsByClassName("hamburger")[0];
    var path = window.location.protocol + "//" + window.location.host + pathName() + "/images/"
    if (menu.style.display == "") {
        menu.style.display = "none";
        nav.style.height = "";
        hamburger.src = path + "icon-hamburger.svg";
    } else {
        menu.style.display = "";
        nav.style.height = "100vh";
        hamburger.src = path + "icon-close.svg";
    }
}

function toggleMenu(screen) {
    var menu = document.getElementsByClassName("menu")[0];
    var nav = document.getElementsByTagName("nav")[0];
    var hamburger = document.getElementsByClassName("hamburger")[0];
    var path = window.location.protocol + "//" + window.location.host + pathName() + "/images/"
    if (screen.matches) {
        menu.style.display = "none";
        nav.style.height = "0vh";
        hamburger.src = path + "icon-hamburger.svg";
    } else {
        menu.style.display = "";
        nav.style.height = "";
        hamburger.src = path + "icon-hamburger.svg";
    }
}

function pathName() {
    var path = window.location.pathname.split("/");
    if (path[path.length - 1].match("index") != null) {
        path.pop();
    }
    return path.join([separador = "/"]);
}

var screen = window.matchMedia("(max-width: 768px)");
toggleMenu(screen);
screen.addListener(toggleMenu);


(function () {
    var toggle = document.querySelector('.nav-toggle');

    toggle.addEventListener('click', function (e) {
        this.classList.toggle('opened');
    });
})();