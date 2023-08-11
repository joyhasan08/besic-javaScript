
// done

let inputArry =[132,132];

function sortMaker(arr) {
    if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid number'
    }
    else if(arr[0] >= 0 && arr[1] >= 0 && arr[1] > arr[0]){
        let maxNumber = arr[1];
        let minNumber = arr[0];
        let newArry = [ maxNumber, minNumber];
        return newArry;
    }
    else if ( arr[0] > arr[1]){
        return arr;
    }
    else{
        return 'equal'
    }
       
 }
 console.log(sortMaker(inputArry));

