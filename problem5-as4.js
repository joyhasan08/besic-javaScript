
let money = [1,2,5,20];
let bill = 10;

function canPay(changeArray, totalDue) { 
    let totalMoney = 0;
    if(money.length === 0 || bill.length === 0){
        let output = 'pleas enter a valid number';

        return output;
    }
    else {
        for(let i = 0; i<changeArray.length; i++ ){
            totalMoney = totalMoney + changeArray[i];
            // console.log(totalMoney);
            
        }
        if (totalMoney<totalDue) {
            return false;
        }
        else if(totalMoney>totalDue){
            return true;
        }
    }
}

console.log(canPay(money,bill));
