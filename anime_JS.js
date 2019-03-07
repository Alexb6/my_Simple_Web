// Toggle Hamburger
function toggleMenu() {
    document.getElementById('navigation').classList.toggle("closed");
};

var x = document.getElementById('hamburger');
x.onclick = toggleMenu;


// Remove closed Class 470px onward
$(window).resize(function () {
    if ($(window).width() > 469) {
        $('#navigation').removeClass('closed');
    } else {
        $('#navigation').addClass('closed');
    }
});


// Dropdown Button
function btnFunction() {
    document.getElementById('myDropdown').classList.toggle("show");
};