function toggleMenu() {
    document.getElementById('navigation').classList.toggle("closed");
};

var x = document.getElementById('hamburgerMenu');
x.onclick = toggleMenu;