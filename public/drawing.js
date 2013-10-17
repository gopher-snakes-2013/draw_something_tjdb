$(document).ready(function(){

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var drawing_id = $('h2').attr("data-id")

  $.ajax({
      type: "get",
      url: "/dataURL",
      data: {id: drawing_id}
    }).done(function(dataURL){
        var image = new Image();
        image.onload=function() {
        ctx.drawImage(image,0,0);
      }
      image.src = dataURL;
    })
})