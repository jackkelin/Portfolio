(function($){
  function init_slide_up(){
    var $work_svg = $('.work-svg');
    $work_svg.addClass('is_visible');
  }
  $(document).ready(function(){
    $('.preloader-icon').addClass('is_visible');
  });
  $(window).on('load', function(){
    // $('.preloader-icon').removeClass('is_visible');
    // $('body').removeClass('preloading');
    // $('.preloader').addClass('is_loaded');

    // setTimeout(function(){

    // }, 500);
    // setTimeout(function(){
    //   $('body').removeClass('preloading');
    //   $('.preloader').addClass('is_loaded');

    // },900);
    setTimeout(function(){
    $('.preloader-icon').removeClass('is_visible');
    $('body').removeClass('preloading');
    $('.preloader').addClass('is_loaded');
    init_slide_up();
    },1500);

  });

})(jQuery);
