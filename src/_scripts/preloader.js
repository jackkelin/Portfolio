(function($){
  function init_slide_up(){
    var $work_svg = $('.work-svg');
    $work_svg.addClass('is_visible');
  }
  $(window).on('load', function(){
    setTimeout(function(){
      $('body').removeClass('preloading');
      $('.preloader').addClass('is_loaded');

    },500);
    init_slide_up();
  });

})(jQuery);
