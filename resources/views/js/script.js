$(document).ready(function() {

$(document).on('click', '.navbar-toggler', function(){
  $('.navbar-toggler').toggleClass('change');
})

//Sticky navbar with less padding

$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position>= 10) {
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  }
  else {
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }
})

//Smooth scroll
$('.nav-item a, .nav-item a h1').click(function(link){
  link.preventDefault();
  let target = $(this).attr('href');  // gets the actual href of the clicked link
  $('html, body').stop().animate({
    scrollTop: $(target).offset().top-25}, 1000);
})

//Magnific Popup
$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
  });
});