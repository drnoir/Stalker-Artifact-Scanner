// on click functions for artifact facts / popups 

$(document).ready(function(){

  $(".image-dot").click(function(){
    $(".infobox1").show();
    console.log("image dot 1 clicked");
  });


  $(".image-dot2").click(function(){
    alert("Label 2 Pressed");
});

// WORKING ON Click hide div
// $('container').click(function(){
//   $('.infobox1').hide();
// });

});