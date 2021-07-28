$(document).ready(function(){
    $('.menu').click(function(){
        $(this).toggleClass('active')
        $('.menu').toggleClass('active')
    })
});