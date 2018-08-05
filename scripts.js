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

  $('#submit-button').on('click', function() {
    console.log('clicked');
    var comment = $('.message-box').val();
    $('#visible-comment').html(comment);
    $('.message.box').hide();
    if(comment === "") {
      $("#message-box").css("border", "2px solid red");
    } else {
      $('#message-box').hide();
    };
    return false;
  });

  $(".message-box").on("keyup", function() {
    console.log("keyup happened");
    var nameName = 3;
    var name = "string";//here we make sure we're catching the keyup
    var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
    console.log(charCount); //here we make sure we set it to the right value
    $("#char-count").html(charCount); //here we show a running character count to the user
    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");


    };
  });
});
