
arr=[2,5,9,10,8,20,1];


function sumArray(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++)
     {
       sum += arr[i];
     }
       return sum;
    }
     

    let sum =   sumArray(arr) ;

   console.log(sum); 

