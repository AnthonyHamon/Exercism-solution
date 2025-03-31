import { getCardPosition, doesStackIncludeCard } from "./enchantments.js"; 

function testFunctions(){
    console.log(getCardPosition([1, 2, 3], 1));
    console.log(getCardPosition([1, 2, 3], 4));
    console.log(doesStackIncludeCard([1, 2, 3], 1));
    console.log(doesStackIncludeCard([1, 2, 3], 4));
}   

testFunctions()