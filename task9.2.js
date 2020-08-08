//Given 2 arrays. Return array with duplicate items.

let first = [2, 18, 34, 49, 17, 16,17];
let second = [34, 18, 8, 5, 16, 17];
//let newArray = [];

let newArray = first.filter(function(createArray) {
    return second.indexOf(createArray) != -1;
  });
  
  console.log(newArray);