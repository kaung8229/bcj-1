$(document).ready(function(){

    // console.log("HI")


    // start header section

    // start banner
    // $('.carousel').carousel({
    //     interval: 1000
    // })
    // end banner

    // end header section



    // start info section
    $(window).scroll(function(){

        var getscrollpoint = $(this).scrollTop();

        // console.log(getscrollpoint);
        if(getscrollpoint >= 220){
            $('.infotexts').addClass("fromlefts")
            $('.infopics').addClass("fromrights")
        }else{
            $('.infotexts').removeClass("fromlefts")
            $('.infopics').removeClass("fromrights")
        }

    })  
    // end info section

    
    // start adv section
    $('#videos').click(function(){

        var getmodal = $(this).data('bs-target');
        var getvideosrc = $(this).data('video');
        var videourlwidthauto = getvideosrc+"?autoplay=1";

        $(getmodal + ' iframe').attr('src',videourlwidthauto);

        $(getmodal + ' button.btn-close').click(function(){
            $(getmodal + ' iframe').attr('src',getvideosrc);
        })

        $(getmodal).click('hidden.bs.modal',function(){
            $(getmodal + ' iframe').attr('src',getvideosrc);
        })

    })
    // end adv section



    // start premises section
    $('#lightslider').lightSlider({
        item:4,
        loop:true,
        slideMove:1,
        speed:600,
        auto: true
    });
    // end premises section



    // start pricing section
    $(window).scroll(function(){

        var getpoint = $(this).scrollTop();
        // console.log(getpoint);

        if(getpoint >= 2450){
            $('.cardones').addClass('movelefts')
            $('.cardtwos').addClass('movebottoms')
            $('.cardthrees').addClass('moverights')
        }else{
            $('.cardones').removeClass('movelefts')
            $('.cardtwos').removeClass('movebottoms')
            $('.cardthrees').removeClass('moverights')
        }

    })
    // end pricing section


    // start joinus section
    $('.accordion').accordion();
    // end joinus section


    // start footer section
    $('#getyear').text(new Date().getUTCFullYear());
    // end footer section


    // start progress
    $(window).scroll(function(){

        var getprogress = $('.progresses');
        var getprogressvalues = $('.prgressvalues');
        var getscrolltop = $(this).scrollTop();
        // console.log(scrolltop);


        // by jquery
        // var getscrollheight = $(document).height();
        // console.log(getscrollheight);
        // var getclientheight = $(window).height();
        // console.log(getclientheight);
        // var calcheight = getscrollheight - getclientheight;
        // console.log(calcheight);
        // var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
        // console.log(getfinalheight);


        // by javascript
        var getscrollheight = document.documentElement.scrollHeight;
        // console.log(getscrollheight);
        var getclientheight = document.documentElement.clientHeight;
        // console.log(getclientheight);
        var calcheight = getscrollheight - getclientheight;
        // console.log(calcheight);
        var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
        // console.log(getfinalheight);






        
        getprogressvalues.text(`${getfinalheight}%`);

        getprogress.css({
            'background': `conic-gradient(steelblue ${getfinalheight}%, #eee ${getfinalheight}%)`
        })

        
        // scrolltop * 100 / (pjheight - currentviewheight)

    })
    // end progress





})