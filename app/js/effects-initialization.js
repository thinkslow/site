$(function () {
  $('.modal-trigger').leanModal();

  $('.slider').slider({full_width: true});

  $('.parallax').parallax();

  $('.thinkslow-events-list:first-child').addClass('active');

  $('.scrollspy').scrollSpy();

  $('.ts-scrollspy-link').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('ul.tabs').tabs();
});
