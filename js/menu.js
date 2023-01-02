
$('.menu_toggle_btn').click(function(){
    $('.gnb').stop().slideToggle('fast');
});

$('.menu_toggle_btn').click(function(){
    $(this).toggleClass('active');
});


$('.tt').click(function() {
    if ( $(this).hasClass('active') ) {
        $(this).find(' > ul').stop().slideToggle(300);
        $(this).removeClass('active');
    }
    else {
        $(this).find(' > ul').stop().slideToggle(300);
        $(this).addClass('active');
    }
});