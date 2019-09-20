$( function() {

    $('.humburger').click(function(){
        $( ".nav__menu" ).animate({
            display: "block",
            height: "toggle"
          }, 500, function() {
          });
    });

    $('.menu__link').click( function() {
        $('.nav__menu').animate({
                display: "block",
                height: "toggle"
            }, 500, function() {
          });
        $('.ham').removeClass('active');
    });


    $(window).resize(function(e){

        if ($(window).width() >= '768'){
            $('.nav__menu').show(5);
                return this;}
            else {
                $('.nav__menu').hide(5);
            }
    });
    
    $(window).resize();


    $('.menu__link').click( function(e) {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });


});