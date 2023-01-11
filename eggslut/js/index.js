$(function(){
    $('.img_wrap').slick({
        infinite: true , 
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false
    })
    
    $('.title_inner').slick({
        infinite: true , 
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30%',
        dots: false,
        arrows:false,

        responsive: [
            {
            breakpoint: 1712,
            settings: {
                centerPadding: '25%',
            }
            },
            {
            breakpoint: 1400,
            settings: {
                centerPadding: '23%'
            }
            },
            {
            breakpoint: 1280,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows:true
            }
            },
            
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows:true
            }
            },
            {
            breakpoint: 768,
            settings: {
                dots:true,
                centerMode: false
            }
            },

        ]
    })    


    $('.btn_nav').click(function(){
        $('.navWrap').addClass('nav_on')
        $('.btn_nav').hide()
    })

    $('.close').click(function(){
        $('.navWrap').removeClass('nav_on')
        $('.btn_nav').show()
    })

    $('.parallax-window').parallax({
        imageSrc:'img/eggslut-wallaper1.jpg',
        imageSrc:'img/eggslut-wallaper2.jpg',
        imageSrc:'img/eggslut-wallaper3.jpg',
        speed:0.3
    })

    $(window).scroll(function(){
        var win_w = $(window).width()
        if(win_w < 768) {
            $('.wallpaper1, .wallpaper2, .wallpaper3').hide()
            var win_top = $(window).scrollTop()
            $('.wallpaper1, .wallpaper2, .wallpaper3').each(function(){
                var box_top = $(this).prev().offset().top
                if(box_top <= win_top){
                    $('.wallpaper1, .wallpaper2, .wallpaper3').hide()
                    $(this).show()
                }
            })
        } else {
            $('.wallpaper1, .wallpaper2, .wallpaper3').show()
            $(window).resize()
        }
        

        // var box1_top = $('.wallpaper1').prev().offset().top
        // if(box1_top <= win_top){
        //     $('.wallpaper2, .wallpaper3').hide()
        //     $('.wallpaper1').show()
        // }
    })
    $(window).scroll()
    
  });
  