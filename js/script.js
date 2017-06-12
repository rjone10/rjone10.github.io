$('.scrolling').click(function (e) {
    e.preventDefault();
    var $this = $(this).attr('href'),
      scrol = $($this).offset().top - 90;
    $('body,html').animate({
      scrollTop: scrol
    }, 1000)
  });
