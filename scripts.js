(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$(document).ready(function(){
  alert("Document is ready!");

  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
      window.location.hash = href;
      });
    }
  });

  $(function () {
    $('#item1').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('#button').on('click', function() {
    console.log('clicked');
    var comment = $('.message-box').val();
    $('#visible-comment').html(comment);
    $('.message.box').hide();
    return false;
  });
});
