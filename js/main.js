$(document).on('ready', function() {
      $(".regular").slick({
        
        infinite: true,
        slidesToShow: 1,
        prevArrow: arrowleft,
	        nextArrow: arrowright
        
        });
 $('#u10657').hide();
       $("#menu-button").on('click', function(e){
        var menu = $('#u10657'),
            btn = $(this);

        if(btn.hasClass('menu__icon_close')){
            btn.removeClass('menu__icon_close');
            btn.addClass('menu__icon');
            menu.hide();
        }else{
            btn.addClass('menu__icon_close');
            btn.removeClass('menu__icon ');
            menu.show();
        }

        return false;
    });
 $("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 60;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
  e.preventDefault();
});
        
      });

