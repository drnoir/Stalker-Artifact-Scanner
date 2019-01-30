$(document).ready(function(){

// fade in the interface slowly
window.onload = function(){
    $( ".bg-interface" ).animate({
        opacity: 1
      }, 1000, function() {
        $("#boot")[0].play();
  });
};  
});
