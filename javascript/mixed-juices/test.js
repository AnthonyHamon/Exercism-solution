import { limesToCut, timeToMixJuice } from "./mixed-juices.js"; 

const choosenJuice = 'Pure Strawberry Joy';

const limes = [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
  ];


function testFunction(){
    console.log(timeToMixJuice(choosenJuice));
    console.log(limesToCut(42, limes));
    console.log(limesToCut(80, limes));
    console.log(limesToCut(0, limes));
    console.log(limesToCut(0, []));
}

testFunction()