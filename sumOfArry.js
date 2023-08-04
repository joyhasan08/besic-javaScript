// function of sum
let givenArry = [10,23,44,54,78,12, 13 ,17,19];
// givenArry.push(100);

function getSumOfAnArry (arry){
    let sum = 0;
    for (let i=0; i<arry.length; i++){
        let numbers = arry[i];
        sum =sum + numbers;
        
    }
    return sum;
    
}
const totalOfArry =  getSumOfAnArry(givenArry);
console.log('sum of the fiven arry is', totalOfArry);

//function of finding odd numbers
 
function getOddNumbers (numbersOfArry) {
    let foundOddNum =[];
    for( let i= 0; i < numbersOfArry.length; i++){
        let index = numbersOfArry[i];
        //  console.log(index);
         if( index % 2 == 1){
            // console.log(index);
            foundOddNum.push(index);
         }
    }
    // console.log(foundOddNum);
    return foundOddNum;
}

let oddNum = getOddNumbers(givenArry);
console.log(oddNum);
let sumOfOddNum = getSumOfAnArry(oddNum);
console.log('sum off odd number from the given arry', sumOfOddNum);
