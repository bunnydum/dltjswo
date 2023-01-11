


$(function(){
    $('.banner_inner').slick({
        infinite: true , 
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true
    })
    
   
    
});


$(document).ready(function(){
    $('.btn_side_open_wrap label').click(function(){
        $('#side_wrap').toggleClass('nav_on')
    })

    $('.close').click(function(){
        $('#side_wrap').removeClass('nav_on')
        $('.btn_side_open_wrap label').show()
    })
});



$(document).ready(function(){
    $('.large_txt').click(function(){
        var submenu = $(this).next("ul");

        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
});

