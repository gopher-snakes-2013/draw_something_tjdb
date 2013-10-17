var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//save to add images locally
// var backgroundImage = new Image();
// backgroundImage.src = 'http://www.bestcoloringpagesforkids.com/wp-content/uploads/2013/06/Coloring-Pages-For-Girls-Hello-Kitty.gif';
// backgroundImage.onload = function(){
// ctx.drawImage(backgroundImage, 0, 0, 500, 500);
// };
var save = document.getElementById("Save");
var restore = document.getElementById("Restore");
var clear = document.getElementById("clear");
var colorPicker = document.getElementById("colorPicker");

var flag = 0;

canvas.addEventListener("mousedown",function(e){
  flag = 1;
  ctx.beginPath();
  ctx.moveTo(e.offsetX,e.offsetY);
  ctx.fillStyle = colorPicker.value;
  ctx.fillRect(e.offsetX,e.offsetY,2,2);
  ctx.strokeStyle = colorPicker.value;
});

canvas.addEventListener("mouseup", function(){
  flag = 0;
});

canvas.addEventListener("mousemove", function(e){
    if (flag === 1) {
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke();
    };
});

save.addEventListener("click", function () {
  event.preventDefault();
  var dataURL = canvas.toDataURL();
    $.ajax({
      type: "POST",
      url: "save_drawing",
      data: {data: dataURL}
    })

});

clear.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

restore.addEventListener("click", function() {
  var image = new Image();
  image.onload=function() {
    ctx.drawImage(image,0,0);
  }
  image.src = dataURL;
});

$('#save_form').submit(function(){
  event.preventDefault();

    })

