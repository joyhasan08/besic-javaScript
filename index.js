
var userName;
var age;

// input function
document.getElementById("btn").onclick = function(){

    userName = document.getElementById("nameInput").value ;

    document.getElementById("outPut").innerHTML = 'Hi, I`m ' +userName ;
}

document.getElementById("age").onclick = function(){

    age = document.getElementById("ageInput").value;
    document.getElementById("agePut").innerHTML = 'i,m' + age + 'years old' ;
}
