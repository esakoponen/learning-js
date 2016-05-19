// farm inventory
function printFarmInventory(cows, chicken) {
  var cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(cowString + " Cows");

  var chickenString = String(chicken);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(chickenString + " Chicken");
}
printFarmInventory(9, 22);

// refactored
function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3) {
    numberString = '0' + numberString;
  }
  console.log(numberString + " " + label)
}

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function refactoredPrintFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
refactoredPrintFarmInventory(6, 88, 23)
