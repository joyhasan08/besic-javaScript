
let givenArry = [10,23,44,54,78,12,];
givenArry.push(100);

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