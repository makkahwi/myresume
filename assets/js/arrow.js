$(document).scroll(function() {
  var y = $(document).scrollTop();
  if (y > 250) {
      $('.totop').addClass("rotate");
  } else if (y <= 250){
      $('.totop').removeClass("rotate");
  }
});

$(".totop").click(function(event){
    var y = $(document).scrollTop();
    var down = y+700;
        if($(this).hasClass('rotate')) {
        $('html, body').animate({scrollTop: '0'}, 800);
    } else {
        $('html, body').animate({scrollTop: down}, 800);
    }
});