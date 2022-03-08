$(".slider") .slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
})