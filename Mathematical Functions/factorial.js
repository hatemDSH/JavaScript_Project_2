







function factorial(num) 
      
{

  let result = 1;

  for (let i = 2; i <= num; i++) 
    {
  result *= i;
    }
 return result;
 }


let fac =  factorial(4);


console.log(fac);
