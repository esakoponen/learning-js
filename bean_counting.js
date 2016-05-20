function countBs(str) {
  console.log("Counting 'B's from " + str)
  if (str == undefined) {
    return 0;
  }

  var counter = 0;
  for (var i = 0; i <= str.length-1; i++) {
    if (str.charAt(i) == 'B') {
      counter++;
    }
  }
  return counter;
}

function countChar(str, char) {
  console.log("Counting '" + char + "'s from " + str)
  if (str == undefined) {
    return 0;
  }
  var counter = 0;
  for (var i = 0; i <= str.length-1; i++) {
    if (str.charAt(i) == char) {
      counter++;
    }
  }
  return counter;
}

var str = "asdfQWEBaBaqqBbfBb"
console.log(str.length)
console.log(str + " has " + countBs(str)+ " 'B's.")
var myChar = 'Q'
console.log(str + " has " + countChar(str, myChar) + " " + myChar + "'s")
