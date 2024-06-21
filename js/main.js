// Check if document is ready using vanilla JavaScript
document.addEventListener("DOMContentLoaded", function(event) {
  const slickOptions = {
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 1,
    slidesToScroll: 1,
    // focusOnSelect: true,
    // arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerPadding: '15%',
            }
        },
        {
            breakpoint: 560,
            settings: {
                centerPadding: '10%',
            }
        }
    ]
}
  console.log('DOM fully loaded and parsed');
  $('.carousel').slick(slickOptions);
});