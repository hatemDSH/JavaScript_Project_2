

// 1er methode  avec function String  
 
function capitalizefirstchWord(str) {

    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {

    words[i] = words[i][0].toUpperCase() + words[i].slice(1);


    }

    return words.join(" ");

    }
    
    let capitalizeSentence = capitalizefirstchWord("I am a good and smart boy !");
    console.log(capitalizeSentence); 

//  2eme methode 


function capitalizeWord(str){

  
    result ="" ; 
     for (let i = 0; i < str.length; i++) 
      {
 
          if (i == 0 || str[i - 1] == " ") 
          {
 
           result += str[i].toUpperCase();
         }
          else {
         result += str[i];
        }
     }
 
 }
       let word =  capitalizeWord ( "I am a good boy ! ");
     
     console.log(result);
 
 