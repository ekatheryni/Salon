$(function () {
    $(document).foundation();

    $('.about-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.main-info').offset().top - 90
            },
            'slow');
    });
    $('.services-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.services').offset().top - 90
            },
            'slow');
    });
    $('.photo-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.gallery').offset().top - 90
            },
            'slow');
    });
    $('.contacts-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.contacts').offset().top - 90
            },
            'slow');
    });
    $('.res-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.results').offset().top - 90
            },
            'slow');
    });

});