

function cubeNumber(number) {

    if( typeof number === 'string' ){
        return 'Invalid input type'
    }
    else{
        let result = Math.pow(number,3);
        return result;
    }  
 }


 console.log(cubeNumber(-5));