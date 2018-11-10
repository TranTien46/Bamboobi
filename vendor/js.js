$(function() {
      setTimeout(function(){ 
        $('.alert.alert-success').fadeOut("slow");
       }, 3000);
    $('.close-ads.ion-close').click(function(event) {
            $('.b-s_top').addClass('hide');       
    });
    $(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $('.navbar-mobile.menu-section .region.region-main-menu').toggleClass('hide');
    });

  $('.item-my-ads .pause-sell').click(function(event) {
            $(this).toggleClass('active');
            $('.states .pk-sell').toggleClass('hide');
            $('.states .gr-sell').toggleClass('hide');
    });

 $('.item-my-ads .pause-buy').click(function(event) {
            $(this).toggleClass('active');
            $('.states .pk-buy').toggleClass('hide');
            $('.states .gr-buy').toggleClass('hide');
    });

  $('.survey__top li:nth-child(1) ').click(function(event) {    
         $(this).addClass('btn-blue-active');
         $('.survey__top li:nth-child(2)').removeClass('btn-gray-active');
     });

  $('.survey__top li:nth-child(2) ').click(function(event) {
         $(this).addClass('btn-gray-active');
         $('.survey__top li:nth-child(1)').removeClass('btn-blue-active');
     });

     $('.survey__top li:nth-child(4) ').click(function(event) {
         
         $(this).addClass('btn-gray-active');
         $('.survey__top li:nth-child(1)').removeClass('btn-blue-active');
     });

     $('.survey__top li:nth-child(3) ').click(function(event) {
        
         $(this).addClass('btn-blue-active');
         $('.survey__top li:nth-child(2)').removeClass('btn-gray-active');
     });
     
     $('input#buy').click(function(event) {
         $('.cl-radio').removeClass('cl-pink');
         $('.cl-radio').addClass('cl-green');
     });
     $('input#sell').click(function(event) {
         $('.cl-radio').removeClass('cl-green');
         $('.cl-radio').addClass('cl-pink');
     });
     $('.fix').click(function(event) {
         $(this).prev().addClass('fix-show');
     });
     $('.show-more-text').click(function(event) {
         $('.show-more').addClass('show-show');
         $(this).addClass('hidden');
         $('.show-less-text').removeClass('hidden');
     });
     $('.show-less-text').click(function(event) {
         $('.show-more').removeClass('show-show');
         $(this).addClass('hidden');
         $('.show-more-text').removeClass('hidden');
     });

     $(window).scroll(function(event) {
         vitri = $('body').scrollTop();
         if (vitri > 750) {
             $('.inf-ads-line.inf-ads-line-gray').addClass('inf-ads-line-blue');
         }
         if (vitri > 1100) {
             $('.inf-ads-line.inf-ads-circle').addClass('circle-check-active');
             $('.btn-done').addClass('bg-blue');
         }
     });
$('.sell-plush').click(function(event) {
    $('.change-bank').addClass('show');
});
$('.change-bank-mask').click(function(event) {
    /* Act on the event */
    $('.change-bank').removeClass('show');
});
$('.changes-title span').click(function(event) {
    $('.change-bank').removeClass('show');
});
$('.changes-btn .btn.btn-outline-primary').click(function(event) {
        $('.change-bank').removeClass('show')
});
$(document).keyup(function(e) {  
        if (e.keyCode === 27){
            $('.mask-popup').removeClass('show');
     $('.change-bank').removeClass('show');
     $('.notifications').addClass('hide');
        $('.notification').removeClass('action');
         $('.inf-user').addClass('hide');
        $('.login-active').removeClass('action');
        } // esc
 });
// js for icon-race
    $('.ion-android-happy').click(function(event) {
        $(this).addClass('active');
        $('.icon-active').removeClass('icon-show');
        $('.ion-android-sad').removeClass('active');
    });
 $('.icon-normal').click(function(event) {
    
    $('.icon-active').addClass('icon-show');
    $('.ion-android-sad').removeClass('active');
    $('.ion-android-happy').removeClass('active');
});
 $('.ion-android-sad').click(function(event) {
     /* Act on the event */
     $(this).addClass('active')
     $('.ion-android-happy').removeClass('active');
     $('.icon-active').removeClass('icon-show');
 });
 // end icon-race
 $('.fa.fa-question-circle').hover(function() {
     $('.note-help').toggleClass('show').fadeIn();
 }, function() {
     $('.note-help').delay(800).fadeOut();
 });
 // jq for menu wallet
 $('.p-w-menu li').click(function(event) {
     $('.p-w-menu li').removeClass('active');
     $(this).addClass('active');
     x=$(this).index();
     x=x+1;
     $('.p-w-form li').removeClass('show');
     $('.p-w-form li:nth-child('+x+')').addClass('show')

 });
 $('.load-more-text').click(function(event) {
     $('tr').removeClass('hide');
 });
 // end jq for menu wallet
 $('.setting-active').click(function(event) {   
    $(this).toggleClass('on');
    $('.page-setting .cl-pink').toggleClass('hide');
    $('.page-setting .cl-white').toggleClass('hide');
    $('.page-setting .action').toggleClass('hide');
    $('.page-setting .cl-green').toggleClass('hide');
    $('.page-setting .cl-green').toggleClass('show');
 });

  $('.setting-menu li').click(function(event) {
     $('.setting-menu li').removeClass('active');
     $(this).addClass('active');
     x=$(this).index();
     x=x+1;
     $('.setting-content li').removeClass('show');
     $('.setting-content li:nth-child('+x+')').addClass('show')

 });
// jq for button login
$('.login-active').click(function(event) {
    $('.notification').removeClass('action');
    $('.notifications').addClass('hide');
    $('.inf-user').toggleClass('hide');
    $(this).toggleClass('action'); 
});
// end jq for button login
// jq for list-introduce
$('.child-big').slideUp();
$('.introduce-child-child').slideUp();
$('.item-main').click(function(event) {

    $('.main').next().slideToggle();
    $(this).toggleClass('ion-minus');
    $(this).toggleClass('ion-plus');
    });
$('.item').click(function(event) {
    $('.introduce-child-child').slideToggle();
    $(this).toggleClass('ion-minus');
    $(this).toggleClass('ion-plus');
    });
// end jq for list-introduce
// notify
$('.notification').click(function(event) {    
    $(this).toggleClass('action');
    $('.inf-user').addClass('hide');
    $('.notifications').toggleClass('hide');
    $('.login-active').removeClass('action') ;
});
// notify
$('body').click(function(event) {
 if(!$(event.target).closest('.notification').length) {
        $('.notifications').addClass('hide');
        $('.notification').removeClass('action');
    }
});
$('body').click(function(event) {
 if(!$(event.target).closest('.login-active').length) {
        $('.inf-user').addClass('hide');
        $('.login-active').removeClass('action');
    } 
});
$('body').click(function(event) {
 if(!$(event.target).closest('.btn-delete').length) {
        $('.mask-popup').removeClass('show');
    }    
});
// create-success-ads
$('.btn-pause').click(function(event) {
    /* Act on the event */
    $('.pause.cl-pink').toggleClass('show');
    $('.begin.cl-green').toggleClass('hide');
    $('.icon-pause').toggleClass('hide');
    $('.icon-play').toggleClass('show');
});
$('.btn-delete').click(function(event) {
    /* Act on the event */
    $('.mask-popup').addClass('show');     
});
$('.close-ads').click(function(event) {
    /* Act on the event */
    $('.mask-popup').addClass('show');
});
$('.popup-content .btn.btn-outline-primary,.popup-content span,.close-ads').click(function(event) {
    /* Act on the event */
    $('.mask-popup').removeClass('show');
     if(!$(event.target).closest('.popup-content').length) {
        $('.mask-popup').removeClass('show');
    }  
});
$('.popup-content .btn.btn-primary').click(function(event) {
    /* Act on the event */
    $('.alert.alert-success').addClass('show');
});
setTimeout(function(){
    if (true) {
        $('.alert.alert-success.show').removeClass('show');
    };
}, 1000);
$('.alert.alert-success span').click(function(event) {
    /* Act on the event */
    $('.alert.alert-success').removeClass('show');
});
 });