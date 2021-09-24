//header img slider

$(document).ready(function () {
    $("#header-slider").slick({
        rtl: true,
        accessibility: false,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    });
});

//text slider
$(document).ready(function () {
    $("#text-slider").slick({
        rtl: true,
        accessibility: false,
        arrows: false,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    });
});

