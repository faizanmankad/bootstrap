$(document).ready(function(){
    $(".build-img").owlCarousel(({
      items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    slideTransition:'ease',
    smartSpeed:1000,
    }));
  });
  
  $(document).ready(function(){
    $(".latest-img").owlCarousel(({
      items:4,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      slideTransition:'ease',
      smartSpeed:1000,
    }));
  });
  
  $(document).ready(function(){
    $(".slidar-text").owlCarousel(({
      items:6,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      slideTransition:'ease',
      smartSpeed:1000,
    }));
    $('.header-scroll-card').css({display: 'none'})
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200){
      $('.header-scroll-card').css({display: 'block'})
      $('.header-1').css({display: 'none'});
      $('.header-card').css({display: 'none'});
      $('.noile-card').css({display: 'none'});
    }
    else{
      $('.header-scroll-card').css({display: 'none'})
      $('.header-1').css({display: 'block'});
      $('.header-card').css({display: 'block'});
      $('.noile-card').css({display: 'block'});
    }
  })
  