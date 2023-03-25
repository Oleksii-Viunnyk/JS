let kmPerDay = 77;
let gasConsumptionPer100Km = 11;
let gasPriceUah = 22;
let workingDays = 21;

let totalDistance = kmPerDay * workingDays;
let totalAmountOfGas = (totalDistance / 100) * gasConsumptionPer100Km;
let totalGasPrice = totalAmountOfGas * gasPriceUah;

console.log(totalDistance);
console.log(totalAmountOfGas);
console.log(totalGasPrice);