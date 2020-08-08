//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let array = [14, 13, 19, 4, 7, 68, 186, 17];

function splitArray (array){
    let oddArray = [];
    let evenArray = [];
    for (i = 0; i < array.length; i ++){
        if (array[i] % 2 ==0){
            oddArray.push(array[i]);
        }
        else ( evenArray.push(array[i]) )
    }
    console.log(oddArray);
    console.log(evenArray);

}
splitArray (array)
