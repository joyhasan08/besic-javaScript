let avg;

function make_avg(num1,num2,num3){
      avg = num1 + num2 + num3;
      console.log(avg);
}


make_avg(10,10,10);

// parctice 1

function foo(){
    console.log("foo");
    bar();
}

function bar(){
    console.log('bar');
}
bar();
foo();

// practice 1 tree number
let number_1 = 3;
let number_2 = 10;
let number_3 = 4;

if( number_1 > number_2 && number_1 > number_3){
    console.log('largest number is', number_1);
}
else if( number_2 > number_1 && number_2 > number_3){
    console.log('largest number is',number_2);
}
else{
    console.log("largest number is",number_3);
}



