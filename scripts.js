(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
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

// work section
for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
  <div class='col-xs-12 col-sm-6 col-md-3'>\
    <img src='" + works[i] + "' alt='kitten' class='img-responsive'>\
    </div>\
");
var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};

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

  // $("#submit-button").on('click', function() {
  //     console.log('comment');
  //     var comment = $('.message-box').val();
  //       $('.message-box').html(comment);
  //         if(comment === "") {
  //         $(".message-box").css("border", "2px solid red");
  //       } else {
  //         $('.message-box').hide();
  //       };
  //     return false;
  // });
});
