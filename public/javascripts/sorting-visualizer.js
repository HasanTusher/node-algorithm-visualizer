function createArray(arr, size) {
   for(let i = size; i > 0; i--){
      arr.push(i);
   }
}

function draw(size) {
   var canvas  = document.getElementById("myCanvas");
   var context = canvas.getContext("2d");
   context.clearRect(0, 0, 500, 500);
   for(let i = 0; i < size; i++) {
      context.fillStyle = "#ac2c2c";
      context.fillRect(i*25, 100+(i*25), 25, arr[i]*25);
   }
}

function animateRectangles() {
   reqAnimFrame = window.requestAnimationFrame(animateRectangles);
   if(x >= 9*25){
      return;
   }
   var canvas  = document.getElementById("myCanvas");
   var context = canvas.getContext("2d");
   context.clearRect(0, 0, 500, 500);
   for(let i = 0; i < 10; i++) {
      if(i == 0){
         x+=5;
         context.fillStyle = "#1a24cf";
         context.fillRect(x, 100+(i*25), 25, arr[i]*25);
      }else{
         context.fillStyle = "#1a24cf";
         context.fillRect(i*25, 100+(i*25), 25, arr[i]*25);
      }
   }
}
document.addEventListener("DOMContentLoaded", function(event) {
   arr = [];
   let size = 10;
   var rightMost = 9*25;
   x = 0;
   x2 = 9*25
   createArray(arr, size);
   draw(size);

   animateRectangles();

});
