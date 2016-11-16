(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 Testimonial active
------------------------------ */  
  $(".client-testimonial-area").owlCarousel({
      autoPlay: true, 
      slideSpeed:500,
      pagination:false,
      navigation:false,   
      items : 1,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
  }); 
/*----------------------------
 Portfolio active
------------------------------ */  
  $(".image-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  /*----------------------------
   Partner Logo
  ------------------------------ */
    $(".client-logo").owlCarousel({
      autoPlay: true,
      slideSpeed:500,
      pagination:false,
      navigation:true,
        items : 5,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,5],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1],
    });
  /*----------------------------
   Relateed Team Member
  ------------------------------ */
    $(".related-team").owlCarousel({
      autoPlay: true,
      slideSpeed:500,
      pagination:false,
      navigation:true,
        items : 3,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,3],
      itemsDesktopSmall : [980,2],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
    });

 /*------------------------------------
 search expand activation code
 -------------------------------------*/ 	
 $("a> i.search-button").on('click', function(){
    $(".search-text").slideToggle('slow');
});

 /*------------------------------------
 SideSlide menu Activation
 -------------------------------------*/ 	   
$('#slideBotton').on('click',function(){
	$('#sideSlide').addClass( "highlight" );
});
$('.close').on('click',function(){
    $('#sideSlide').removeClass( "highlight" );
});

	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 


/*-------------------------------
Counter Up
---------------------------------*/       
    $('.about-counter').counterUp({
        delay: 50,
        time: 3000
    });	 
    /*--------------------------
     Sticky Menu Activation Code
    ---------------------------- */        
        $(window).on('scroll', function(){
            if( $(window).scrollTop()>100 ){
                $('.sticky').addClass('stick');
                } else {
                $('.sticky').removeClass('stick');
            }
        });    
        $(window).on('scroll', function(){
            if( $(window).scrollTop()>100 ){
                $('.mob-sticky').addClass('mob-stick');
                } else {
                $('.mob-sticky').removeClass('mob-stick');
            }
        });
/*----------------------------
mixitup active
------------------------------ */  
	$('#Container').mixItUp();
  /*-------------------------------------
  Jquery  Color pannel setting
  -------------------------------------*/
  $('span.skype-color').on('click',function(){
    $('body').addClass('skype-color-body').removeClass('green-color-body red-color-body blue-color-body');
  });
  $('span.red-color').on('click',function(){
    $('body').addClass('red-color-body').removeClass('green-color-body skype-color-body blue-color-body');
  });
  $('span.green-color').on('click',function(){
    $('body').addClass('green-color-body').removeClass('red-color-body skype-color-body blue-color-body');
  });
  $('span.blue-color').on('click',function(){
    $('body').addClass('blue-color-body').removeClass('red-color-body green-color-body skype-color-body');
  });
  $('.cross-button').on('click',function(){
    $('.demo-panel-setting-area').toggleClass( "highlight" );
  });		
 
})(jQuery);

