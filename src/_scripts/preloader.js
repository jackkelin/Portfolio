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
    }, 300);
    setTimeout(function(){
      $('body').removeClass('preloading');      
      $('.preloader').addClass('is_loaded');

    },500);
    init_slide_up();
  });

})(jQuery);
