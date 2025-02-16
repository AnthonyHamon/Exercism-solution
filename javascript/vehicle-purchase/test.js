import { needsLicense, chooseVehicle, calculateResellPrice

 } from "./vehicle-purchase.js"



function testFunctions(){
    console.log(needsLicense("car"));
    console.log(needsLicense("truck"));
    console.log(needsLicense("bike"));
    console.log(chooseVehicle("VW kaefer", "VW Ente"));
    console.log(chooseVehicle("Audi A6", "Audi A4"));
    console.log(chooseVehicle("Audi A6", "Opel"));
    console.log(calculateResellPrice(20000, 1));
    console.log(calculateResellPrice(20000, 2.5));
    console.log(calculateResellPrice(20000, 5));
    console.log(calculateResellPrice(20000, 10));

}

testFunctions()