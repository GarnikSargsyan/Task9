
//Insert a digit and a number. Check whether the number contains that digit or not.

var number = 12354987,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

let digit = 3;

console.log(output.includes(digit));
