$(document).ready(function(){

let now = new Date().toLocaleTimeString();

// fade in the interface slowly
window.onload = function(){
    $( ".bg-interface" ).animate({
        opacity: 1
      }, 1000, function() {
        $("#boot")[0].play();
        $( "span.time" ).append(now);
  });


}});
