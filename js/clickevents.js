// on click functions for artifact facts / popups 

$(document).ready(function(){

  $(".image-dot").click(function(){
    $("p.infobox").empty();
    // $(".infobox2").hide();
    // $("#open")[0].play();
    // $(".infobox1").show();
    // console.log("image dot 1 clicked");
    $("p.infobox").append("This is the fuselage of the toxic waste ....")
  });


  $(".image-dot2").click(function(){
    $("p.infobox").empty();
    // $(".infobox1").hide();
    // $("#open")[0].play();
    // $(".infobox2").show();
    $("p.infobox").append("This is blablablllba ....")
    console.log("image dot 2 clicked");
});

//  WORKING ON Click hide div
$('container').click(function(){
  $('.infobox1','infobox2').hide();
 });

});