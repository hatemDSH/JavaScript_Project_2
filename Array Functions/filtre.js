
let array = [25, 45, 70, -12, 120, 5,0, 17, 90]; 

let result = array.filter(filterArray);

function filterArray(subfil) 
   {

      return subfil => 30 ;
   }

console.log(array.filter(filterArray));

