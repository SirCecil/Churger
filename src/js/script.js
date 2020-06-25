@@include('jquery.min.js')
@@include('slick.min.js')
$('.screen4__carousel').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 9,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,

      }
    }
  ]
});