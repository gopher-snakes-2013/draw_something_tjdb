function draw(x,y) {
  var ctx = document.getElementById("a").getContext("2d");
  ctx.fillRect(x,y,100,100);

};

var x = 20;
var y = 20;

document.getElementById("a").addEventListener("click", function(){
  draw(x,y);
  x += 5;
  y += 5;
});

function drawing_dot(x,y){
  var ctx = document.getElementById("a").getContext("2d");
  ctx.fillRect(x,y,5,5);
}

document.getElementById("a").addEventListener("mousemove",function(e){
  drawing_dot(e.x,e.y);
});
