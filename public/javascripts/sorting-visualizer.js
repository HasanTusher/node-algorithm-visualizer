function createArray(arr) {
   for(let i = 10; i> 0; i--){
      arr.push(i);
   }
}

function draw() {
   var canvas  = document.getElementById("myCanvas");
   var context = canvas.getContext("2d");
   context.clearRect(0, 0, 500, 500);

   let size = 10;
   let x = 0;
   for(let i = 0; i < size; i++) {
      context.fillStyle = "#ff00ff";
      context.fillRect(i*25, 100+(i*25), 25, arr[i]*25);
   }
}

document.addEventListener("DOMContentLoaded", function(event) {
   arr = [];s
   createArray(arr);
   draw();
});
