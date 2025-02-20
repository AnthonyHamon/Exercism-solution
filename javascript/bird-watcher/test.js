import { birdsInWeek, fixBirdCountLog, totalBirdCount } from "./bird-watcher.js"

const birds = [0, 2, 5, 8, 9, 10, 4, 3, 2];
const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
const birdsPerDayToFix = [2, 5, 0, 7, 4, 1];



function testFunctions(){
    console.log(totalBirdCount(birds));
    console.log(birdsInWeek(birdsPerDay, 2));
    console.log(fixBirdCountLog(birdsPerDayToFix));
}

testFunctions();