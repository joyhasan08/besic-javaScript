/*
let mobileInfo = {
    name: "apple",
    os: "ios-17",
    model: "11-pro-max",
    Storage: 64,
    price: 50000,
}
console.log(mobileInfo);
console.log(mobileInfo.os);
mobileInfo.name = "Oppo";
console.log(mobileInfo);
*/

function inchToFeetConvater (inch){
    let feet = inch / 12;
    // console.log(feet,'feet')
    return feet;

}
 
 let myHightInInch = 66;
let myHight = inchToFeetConvater(myHightInInch);
console.log(myHight.toFixed(1),'Feet');

let sojibHight = 68;
let myHight2 = inchToFeetConvater(sojibHight);
console.log(myHight2.toFixed(1),'Feet');

