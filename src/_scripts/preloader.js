(function($){
  function init_slide_up(){
    var $svg_desktop = $('.work-svg--desktop');
    var $svg_tablet = $('.work-svg--tablet');
    var $svg_mobile = $('.work-svg--mobile');
    setTimeout(function(){
      $svg_desktop.addClass('animate-slideUp');
    },400);
    setTimeout(function(){
      $svg_tablet.addClass('animate-slideUp');
    },1000);
    setTimeout(function(){
      $svg_mobile.addClass('animate-slideUp');
    },1400);
  }
  $(window).on('load', function(){
    setTimeout(function(){
      $('body').removeClass('preloading');
      $('.preloader').addClass('is_loaded');
      init_slide_up();
    },500);
  });

})(jQuery);
