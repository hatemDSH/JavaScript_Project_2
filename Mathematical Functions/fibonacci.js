

function fibonacci(num)
{
   let result = [0, 1];

   for (let i = 2; i < num; i++)
     {
        result[i] = result[i - 1] + result[i - 2];
     }

   return result;

}

let fib =  fibonacci(5) ;

console.log(fib);
