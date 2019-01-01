

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
  $(document).ready(function(){
    var scrollTop = 0;
    $('header').removeClass('scrolled-nav');
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop < 500) {
        $('header').removeClass('scrolled-nav');
      } else if (scrollTop > 500) {
        $('header').addClass('scrolled-nav');
      } 
      
    }); 
    
  });


  
// //   $(document).ready(function() {
// //     $(window).scroll( function(){
// //         $('.boxes').each( function(i){
            
// //             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
// //             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
// //             if( bottom_of_window > bottom_of_element ){
// //                 $(this).animate({'opacity':'1'},1000);
// //             }
            
// //         }); 
// //     });
// // });

// $(window).scroll(function() {
//   var winHeight = $(this).height();
//   var scrollTop = $(this).scrollTop();
  
//   var elemHeight = $("#Features").height();
//   var elementTop = $("#Features").position().top; 
   
//   if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight)
  
//   var opacity=1;
      
//   else
//   var opacity=0;
  
//   $("#Features").stop().animate({
//       opacity: opacity
//   }, "slow");
// });


