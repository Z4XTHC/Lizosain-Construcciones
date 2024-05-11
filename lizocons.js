$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });

  // Obtén todos los elementos con la clase "border-svg"
const borderSVGs = document.querySelectorAll('.border-svg');

// Agrega la clase "animate-border" a cada elemento después de un pequeño retraso
borderSVGs.forEach((borderSVG) => {
  setTimeout(() => {
    borderSVG.classList.add('animate-border');
  }, 100);
});