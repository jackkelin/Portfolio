(function($){
  function init_slide_up(){
    var $work_svg = $('.work-svg');
    $work_svg.addClass('is_visible');
  }
  $(document).ready(function(){
    $('.preloader-icon').addClass('is_visible');
  });
  $(window).on('load', function(){
    setTimeout(function(){
      $('.preloader-icon').removeClass('is_visible');
      $('body').removeClass('preloading');
      $('.preloader').addClass('is_loaded');
      init_slide_up();
    },1500);
  });

})(jQuery);
