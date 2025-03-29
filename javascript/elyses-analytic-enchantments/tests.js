import { getCardPosition } from "./enchantments.js"; 

function testFunctions(){
    console.log(getCardPosition([1, 2, 3], 1));
    console.log(getCardPosition([1, 2, 3], 4));
}   

testFunctions()