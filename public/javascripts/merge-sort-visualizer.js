function createArray(arr, size) {
   for(let i = size; i > 0; i--){
      arr.push(i);
      //renderArray.push(i);
   }
}


function merge(leftSubArray, rightSubArray) {
   let i = 0;
   let j = 0;
   let tempArray = [];

   while(i < leftSubArray.length && j < rightSubArray.length){
      if(leftSubArray[i] < rightSubArray[j]){
         tempArray.push(leftSubArray[i]);
         i++;
      }else if(leftSubArray[i] > rightSubArray[j]){
         tempArray.push(rightSubArray[j]);
         j++;
      }
   }

   while(i < leftSubArray.length){
      tempArray.push(leftSubArray[i]);
      i++;
   }

   while(j < rightSubArray.length){
      tempArray.push(rightSubArray[i]);
      j++;
   }

   return tempArray;
}

function mergeSort(arr, first, last) {
   if(first === last){
      return [arr[first]];
   }
   let mid = Math.floor((first+last)/2);
   let leftSubArray = mergeSort(arr, first, mid);
   let rightSubArray = mergeSort(arr, mid+1, last);
   return merge(leftSubArray, rightSubArray);



}


arr = [];
createArray(arr, 10);
console.log(arr);
let zz = mergeSort(arr, 0, 9);
console.log(zz);
