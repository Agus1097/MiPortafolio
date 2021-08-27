$(document).ready(function () {
    var $navbar = $('#menu');
    var $name = $('#font-name');
    var $items = $('#font-color');
    var $items2 = $('#font-color2');
    var $items3 = $('#font-color3');
    var $items4 = $('#font-color4');
    var $items5 = $('#font-color5');
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 10) {
            $items.addClass('text-color');
            $items2.addClass('text-color');
            $items3.addClass('text-color');
            $items4.addClass('text-color');
            $items5.addClass('text-color');
            $name.addClass('color-name');
            $navbar.addClass('bg-navbar');
        } else {
            $items.removeClass('text-color');
            $items2.removeClass('text-color');
            $items3.removeClass('text-color');
            $items4.removeClass('text-color');
            $items5.removeClass('text-color');
            $name.removeClass('color-name');
            $navbar.removeClass('bg-navbar');
        }
    });

});