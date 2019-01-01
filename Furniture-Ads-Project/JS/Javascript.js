alert('good')
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 900, function(){
          window.location.hash = hash;
          alert('scroll')
        });
      } 
    });
  });
