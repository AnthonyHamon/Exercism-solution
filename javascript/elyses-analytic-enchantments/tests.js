import { getCardPosition, doesStackIncludeCard, isEachCardEven, doesStackIncludeOddCard } from "./enchantments.js"; 

function testFunctions(){
    console.log(getCardPosition([1, 2, 3], 1));
    console.log(getCardPosition([1, 2, 3], 4));
    console.log(doesStackIncludeCard([1, 2, 3], 1));
    console.log(doesStackIncludeCard([1, 2, 3], 4));
    console.log(isEachCardEven([2, 4, 6]));
    console.log(isEachCardEven([2, 5, 6]));
    console.log(doesStackIncludeOddCard([2, 5]));
    console.log(doesStackIncludeOddCard([2, 4, 6]));
}   

testFunctions()