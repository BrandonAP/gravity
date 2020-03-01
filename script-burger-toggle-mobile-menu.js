$(document).ready(function(){
    $('.burger-toggle').click(function(){
        $('.navigation-bar-nav').toggleClass('active');
        $('.burger-toggle').toggleClass('toggle');
    });
});