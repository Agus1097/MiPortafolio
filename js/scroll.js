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
            $items.addClass('text-color3');
            $items2.addClass('text-color3');
            $items3.addClass('text-color3');
            $items4.addClass('text-color3');
            $items5.addClass('text-color3');
            $name.addClass('color-name');
            $navbar.addClass('bg-navbar');
        } else {
            $items.removeClass('text-color3');
            $items2.removeClass('text-color3');
            $items3.removeClass('text-color3');
            $items4.removeClass('text-color3');
            $items5.removeClass('text-color3');
            $name.removeClass('color-name');
            $navbar.removeClass('bg-navbar');
        }
    });

});