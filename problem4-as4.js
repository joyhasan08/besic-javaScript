
function findAddress(obj) {
    let str = "";
    if ("street" in obj) {
      str += obj.street;
    } else {
      str += "__";
    }
    if ("house" in obj) {
      str += "," + obj.house;
    } else {
      str += "," + "__";
    }
  
    if ("society" in obj) {
      str += "," + obj.society;
    } else {
      str += "," + "__";
    }
  
    return str;
  }
  
  const obj1 = {
    street: 10,
    house: "15A",
    society: "E F",
  };
  const obj2 = {
    street: 10,
    society: "E F",
  };
  
  const obj3 = {
    street: 10,
  };
  const obj4 = {};
  
  console.log(findAddress(obj1));
//   console.log(findAddress(obj2));
//    console.log(findAddress(obj3));
//   console.log(findAddress(obj4));
  