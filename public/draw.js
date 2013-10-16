var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var save = document.getElementById("Save");
var restore = document.getElementById("Restore");
var clear = document.getElementById("clear");
var colorPicker = document.getElementById("colorPicker");

var flag = 0;

canvas.addEventListener("mousedown",function(e){
  flag = 1;
  ctx.beginPath();
  ctx.moveTo(e.offsetX,e.offsetY);
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
  dataURL = canvas.toDataURL();
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