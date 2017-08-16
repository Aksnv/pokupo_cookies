$(".cookies__close-button").click(function() {
  $(".cookies").hide();
});

function seeCookiesMessage() {
  $(".cookies").fadeIn();
};

setTimeout(seeCookiesMessage, 2000);