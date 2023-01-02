$(document).ready(function () {
    
    $('.stop').click(function(){
       $(this).fadeOut().siblings().fadeIn();
    });
    
    $('.play').click(function(){
       $(this).fadeOut().siblings().fadeIn(); 
    });
    
});
