// console.log("hi")

$(document).ready(function(){

    // start back to top section

    $('.btn-backTotops').hide();

    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();

        // console.log(getscrolltop);

        if(getscrolltop >= 370){
            $('.btn-backTotops').fadeIn(1000);
        }else{
            $('.btn-backTotops').fadeOut(1000);
        }

    })

    // end back to top section
  


    // start header

        // start nav
        $('.navbarbuttons').click(function(){
            $('.navbarbuttons').toggleClass('crossxs');
        })

        // for nav
        // scroll() method
        $(window).scroll(function(){
            let getscrolltop = $(this).scrollTop();

            // console.log(getscrolltop);

            if(getscrolltop >= 200){
                $('.navbar').addClass("navmenus");
            }else{
                $('.navbar').removeClass("navmenus");
            }
        })

        // end nav

    // end header


    // start properties

        
        $('.propertylists').click(function(){

            // for ul li
            $(this).addClass("activeitem").siblings().removeClass('activeitem');



            // for filters
            let getattr = $(this).attr("data-filter");

            // console.log(getattr);

            if(getattr === "all"){
                $('.filters').show('slide',500);
            }else{

                $('.filters').hide();

                $('.filters').not("." + getattr).hide('slide',500);

                $('.filters').filter('.' + getattr).show('slide',500);

            }
        })

        lightbox.option({
            showImageNumberLabel:false
        })
    // end properties


    // start adv section
        $(window).scroll(function(){

            let getscrolltop = $(this).scrollTop();

            // console.log(getscrolltop);

            if(getscrolltop >= 900){
                $('.advimages').addClass('fromlefts');
                $('.advtexts').addClass('fromrights');
            }else{
                $('.advimages').removeClass('fromlefts');
                $('.advtexts').removeClass('fromrights');
            }

        })
    // end adv section

    // start footer section
    let getyear = $('#getyear');
    let getFullyear = new Date().getUTCFullYear();
    
    getyear.text(getFullyear);

    // end footer section


})