
function isPrime(nmbr) 
{
    if (nmbr <= 1) 
    {
      return false; 
    }
    
    else if (nmbr === 2) 
    {
      return true;
    }
      
   else
       {

        for (let i = 2; i <= Math.sqrt(nmbr); i++)
          {
               if  (nmbr % i === 0 )
           {
              return false; 
           }
       }

         return true; 
  }
}

// Test cases
console.log( "1 -> ", isPrime(1)); // Output: false
console.log( "2 -> ", isPrime(2)); // Output: true
console.log( "3 -> ", isPrime(3)); // Output: true
console.log( "4 -> ", isPrime(4)); // Output: false
console.log( "5 -> ", isPrime(5)); // Output: true
console.log( "6 -> ", isPrime(6)); // Output: false
console.log( "11 -> ", isPrime(11)); // Output: true
console.log( "12 -> ", isPrime(12)); // Output: false
