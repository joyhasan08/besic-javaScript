
// Problem - 2 

let  strg1 = 'joy hasan ';
let  strg2 = 'oyasdas'

function matchFinder(string1, string2) {

    if ( typeof string1 !== "string" || typeof string2 !== "string" ){
        console.log("Erro. Please Enter a String");
    }
    else{
        let result = string1.includes(string2);
        return result;
    }
    
    
    
 }


console.log(matchFinder(strg1,strg2));

//////////////////////////////////////////////


