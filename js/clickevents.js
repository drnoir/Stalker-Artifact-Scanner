// on click functions for artifact facts / popups 

$(document).ready(function(){

  $(".image-dot").click(function(){
    $(".infobox2").hide();
    $("#open")[0].play();
    $(".infobox1").show();
    console.log("image dot 1 clicked");
  });


  $(".image-dot2").click(function(){
    $(".infobox1").hide();
    $("#open")[0].play();
    $(".infobox2").show();
    console.log("image dot 2 clicked");
});

//  WORKING ON Click hide div
$('container').click(function(){
  $('.infobox1','infobox2').hide();
 });

});