window.onload = function(){
    // Animation in pure Javascript
    console.log(Array.from(document.getElementsByClassName('hs'))[0])
    Array.from(document.getElementsByClassName('hs'))[0].addEventListener('click', function(e) {
        console.log('from Javascript: from CSS class selector', e);
        this.style.color = 'red';
    });
    document.getElementById('animTestElm').addEventListener('click', function(e) {
        console.log('from Javascript: from CSS ID selector', e);
        this.style.color = 'blue';
    });
    // Animation in jQuery
    $('.hs')[0].addEventListener('click', function(e) {
        console.log('from JQuery:', e)
        this.style.color = 'blue';
    });
};


