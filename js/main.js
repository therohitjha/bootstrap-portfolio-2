$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 300px, adds/removes solid class
      if($(this).scrollTop() > 250) { 
          $('.navbar').addClass('trans-2-solid-nav');
      } else {
          $('.navbar').removeClass('trans-2-solid-nav');
      }
    });
});