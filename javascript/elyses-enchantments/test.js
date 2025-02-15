import { getItem, insertItemAtBottom, setItem, insertItemAtTop,
    removeItem, removeItemAtBottom, removeItemFromTop,
    checkSizeOfStack

} from "./enchantments.js";

let cards = [1, 5, 7];
const replacementcard = 0;
const newCard = 8;
const stackSize = 52;


function testFunction() {
    console.log(getItem(cards, 2));
    console.log(setItem(cards, 0, replacementcard));
    console.log(insertItemAtTop(cards, newCard));
    console.log(removeItem(cards, 0));
    console.log(removeItemFromTop(cards));
    console.log(insertItemAtBottom(cards, 12));
    console.log(removeItemAtBottom(cards));
    console.log(removeItemAtBottom(cards));
    console.log(checkSizeOfStack(cards, stackSize));
}

testFunction();
