// Check if document is ready using vanilla JavaScript
document.addEventListener("DOMContentLoaded", function(event) {
  const slickOptions = {
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: '10%',
  }
  console.log('DOM fully loaded and parsed');
  $('.carousel').slick(slickOptions);
});