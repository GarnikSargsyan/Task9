//Enter a number. Find the difference between its biggest and smallest digits.


var number = 12354987,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

function myFunction() {
    let newArray = [];
    newArray = output.sort(function(a, b){return b - a});
    let difference = newArray[0] - newArray[newArray.length-1];
    return difference;
    
}

console.log(myFunction());