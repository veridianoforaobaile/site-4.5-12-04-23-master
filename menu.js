
$('.menu-toggle').click(function(e){
  //click event for left clicks only! http://www.jacklmoore.com/notes/click-events
  if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
    e.preventDefault();
    if($(this).parent().find('.menu').hasClass('expanded-mobile-menu')){
      $(this).removeClass('expanded-menu-toggle').parent().removeClass('nav-expanded').find('.menu').removeClass('expanded-mobile-menu');
    }else{
      $(this).addClass('expanded-menu-toggle').parent().addClass('nav-expanded').find('.menu').addClass('expanded-mobile-menu');
    }
  }
});