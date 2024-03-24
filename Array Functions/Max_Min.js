arr=[2,5,9,10,8,19,1];

function MaxArray(arr) {
    let max = arr[0];
       for (let i = 1; i < arr.length; i++) 
       {
           if (arr[i] > max) 
           {
              max = arr[i];
            }
        }
       return max;
    }
   
    let max = MaxArray(arr) ;
    console.log("the max in this Array is ", max );


    
    function MinArray(arr) 
     {
       let min = arr[0];

    for (let i = 1; i < arr.length; i++)
      {
         if (arr[i] < min) 
         {
           min = arr[i];
         }
    }
    return min;
    }

   let min =  MinArray(arr);

console.log("the min in this Array is ",min);
