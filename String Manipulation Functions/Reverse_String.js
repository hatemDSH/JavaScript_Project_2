

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
    }
    return reversedStr;
    }
 let  f = reverseString("hatem");
    console.log(f) ;