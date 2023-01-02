$(document).ready(function(){
    
    
    $('.pc_main_menu li').mouseover(function(){
       $('.pc_sub_menu').slideDown(); 
        $('.box').slideDown();
        $('hr').fadeIn();
    });
    
    
    
    $('.pc_sub_menu').mouseleave(function(){
       $('.pc_sub_menu').stop().slideUp(); 
        $('.box').stop().slideUp();
        $('hr').fadeOut();
    });
    
    
});