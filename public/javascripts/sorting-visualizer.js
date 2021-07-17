

document.addEventListener("DOMContentLoaded", function(event) {
   var x =  0;
   var y = 15;

   var x2 = 475;
   var y2 = 15;

   var speed = 1;

   function animate() {

      // reqAnimFrame = window.mozRequestAnimationFrame    ||
      //     window.webkitRequestAnimationFrame ||
      //     window.msRequestAnimationFrame     ||
      //     window.oRequestAnimationFrame
      // ;
      reqAnimFrame = window.requestAnimationFrame(animate);

      //reqAnimFrame(animate);

      x += speed;

      x2-=speed;

      if(x <= 0 || x >= 475){
         speed = -speed;
         // return;
      }

      if(x2 <= 0 || x2 >= 475){
         speed = +speed;
         // return;
      }

      draw();
   }


   function draw() {
      var canvas  = document.getElementById("myCanvas");
      var context = canvas.getContext("2d");

      context.clearRect(0, 0, 500, 170);
      context.fillStyle = "#ff00ff";
      context.fillRect(x, y, 25, 25);
      context.fillStyle = "#0040ff";
      context.fillRect(x2, y2, 25, 25);
      //context.fillRect(x, y+100, 25, 25);
   }
   animate();
});
