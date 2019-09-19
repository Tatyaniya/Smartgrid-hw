$( function() {

    $('.humburger').click(function(){
        $( ".nav__menu" ).animate({
            display: "block",
            height: "toggle"
          }, 500, function() {
          });
    });

    $('.menu__link').click( ()=> {
        $('.nav__menu').animate({
                display: "block",
                height: "toggle"
            }, 500, function() {
          });
        $('.ham').removeClass('active');
    });

    $('.menu__link').click( function(e) {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });


});