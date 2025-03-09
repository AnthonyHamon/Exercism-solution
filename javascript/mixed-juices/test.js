import { limesToCut, remainingOrders, timeToMixJuice } from "./mixed-juices.js"; 

const choosenJuice = 'Energizer';

const limes = [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
  ];

  const orders = [
    'Tropical Island',
    'Energizer',
    'Limetime',
    'All or Nothing',
    'Pure Strawberry Joy',
  ];

function testFunction(){
    console.log(timeToMixJuice(choosenJuice));
    console.log(limesToCut(42, limes));
    console.log(limesToCut(4, ['medium', 'small']));
    console.log(limesToCut(80, limes));
    console.log(limesToCut(0, limes));
    console.log(limesToCut(0, []));
    console.log(remainingOrders(7, orders));
}

testFunction();