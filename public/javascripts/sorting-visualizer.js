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

function sortArray(arr) {
   for( i; i< arr.length; i++){
      let val = arr[i];

      if(j === arr.length) j =0; // last element

      for( j; j< arr.length; j++){
         if(val < arr[j]){
            [arr[i], arr[j]] = [arr[j], arr[i]]; // arr[i] and arr[j] will swap position
            //i++; j++;
            return

         }
      }
   }
}

document.addEventListener("DOMContentLoaded", function(event) {
   arr = [];
   i = 0; // i equivalent
   j = 0; // j equivalent
   let size = 10;
   x = 0;
   x2 = 9*25
   createArray(arr, size);
   console.log(arr);
   //sortArray(arr);
   console.log(arr);
   console.log(i)
   console.log(j)
   draw(size);

   animateRectangles();

});
