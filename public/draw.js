var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var save = document.getElementById("Save");
var restore = document.getElementById("Restore");
var clear = document.getElementById("clear");
var colorPicker = document.getElementById('colorPicker')

function drawing_dot(x,y){
  ctx.fillRect(x,y,5,5);
  ctx.fillStyle = colorPicker.value;
}


var flag = 0;

canvas.addEventListener("mousedown",function(){
  flag = 1;
});

canvas.addEventListener("mouseup", function(){
  flag = 0;
});

canvas.addEventListener("mousemove", function(e){
    if (flag === 1) {
      drawing_dot(e.offsetX,e.offsetY);
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