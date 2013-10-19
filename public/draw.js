$(document).ready(function(){
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var save = document.getElementById("Save");
var restore = document.getElementById("Restore");
var clear = document.getElementById("clear");
var colorPicker = document.getElementById("colorPicker");

var flag = 0;

var global_state = {
  time: 0,
  x: 0,
  y: 0
}

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
      var time_delta = e.timeStamp - global_state.time;
      var x_delta = e.offsetX - global_state.x;
      var y_delta = e.offsetY - global_state.y;
      var magnitude = Math.sqrt(Math.pow(x_delta,2) + Math.pow(y_delta,2));
      var velocity = magnitude / time_delta;

      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.lineWidth = (velocity * 5);
      ctx.stroke();
      global_state.time = e.timeStamp;
      global_state.x = e.offsetX;
      global_state.y = e.offsetY;

      
    };
});

canvas.addEventListener("mouseout", function(e){
  flag = 0;
});

save.addEventListener("click", function () {
  event.preventDefault();
  var dataURL = canvas.toDataURL();
    $.ajax({
      type: "POST",
      url: $(this).attr("data-url"),
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

})
