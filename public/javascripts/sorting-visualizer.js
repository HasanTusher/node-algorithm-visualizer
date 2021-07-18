function createArray(arr, size) {
   for(let i = size; i > 0; i--){
      arr.push(i);
      renderArray.push(i);
   }
}

function draw(size) {
   var canvas  = document.getElementById("myCanvas");
   var context = canvas.getContext("2d");
   context.clearRect(0, 0, 500, 500);
   for(let i = 0; i < size; i++) {
      context.fillStyle = "#ac2c2c";
      context.fillRect(i*25, 100+(i*25), 25, renderArray[i]*25);
   }
}

function animateRectangles() {
   reqAnimFrame = window.requestAnimationFrame(animateRectangles);
   if(x == xdest){
      renderArray = [...arr];
      sortArray(arr, 25)
   }
   var canvas  = document.getElementById("myCanvas");
   var context = canvas.getContext("2d");
   let primaryIndex = i;
   let secondaryIndex = j;
   context.clearRect(0, 0, 500, 500);
   for(let i = 0; i < 10; i++) {
      let y;
      if(i == primaryIndex){
         if(x < xdest){
            x+=1;
            //y = 100+(i*25);
         }else{
            x-=1;
            //y = 100-(i*25);
         }
         context.fillStyle = "#1a24cf";
         context.fillRect(x, 100+(i*25), 25, renderArray[i]*25);
      }else if(i == secondaryIndex){
         console.log(x2)
         console.log(x2dest)
         if(x2 < x2dest){
            x2+=1;
         }else{
            x2-=1;
         }
         context.fillStyle = "#1a24cf";
         context.fillRect(x2, 100+(i*25), 25, renderArray[i]*25);
      }
      else{
         context.fillStyle = "#1a24cf";
         context.fillRect(i*25, 100+(i*25), 25, renderArray[i]*25);
      }
   }
}

function sortArray(arr, unit) {
   for( i; i< arr.length; i++){
      let val = arr[i];
      if(j === arr.length) j =0; // last element

      for( j; j< arr.length; j++){
         if(val < arr[j]){
            [arr[i], arr[j]] = [arr[j], arr[i]]; // arr[i] and arr[j] will swap position
            x = (i*unit);
            x2 = (j*unit);
            xdest = x2;
            x2dest = x;
            return

         }
      }
   }
}

document.addEventListener("DOMContentLoaded", function(event) {
   arr = [];
   renderArray = [];
   i = 0; // i equivalent
   j = 0; // j equivalent
   let size = 10;
   x = 0; xdest = 0;
   x2 = 0; x2dest = 0;
   createArray(arr, size);
   //sortArray(arr);
   draw(size);
   sortArray(arr, 25);
   animateRectangles();

});
