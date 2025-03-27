import { luckyNumber, twoSum, errorMessage } from "./lucky-numbers.js";



function testFunctions(){
    console.log(twoSum([1, 2, 4, 0, 3, 5, 2, 9], [3, 2, 4, 8, 1, 5, 4, 1, 8]));
    console.log(luckyNumber(15651));
    console.log(errorMessage('5e3'));
}

testFunctions();