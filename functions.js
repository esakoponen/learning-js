// 3 Functions : Defining a function
// square
var square = function(x) {
  return x * x
}
console.log(square(8))

// make noise
var makeNoise = function() {
  console.log("Pling!")
}
makeNoise();

// recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  else {
    return base * power(base, exponent - 1);
  }
}
console.log("2^4 = " + power(2, 4))

// 3 Functions : Nested scope : drawing landscapes
var landscape = function () {
  var result = '';
  var flat = function(size) {
    for (var count = 0; count < size; count++) {
      result += '_';
    }
  };
  var mountain = function (size) {
    result += '/';
    for (var count = 0; count < size; count++) {
      result += '*'
    }
    result += '\\';
  };
  flat(3);
  mountain(4);
  flat(6);
  mountain(1)
  flat(1);
  return result;
};
console.log(landscape());

// find solution
function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else {
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
    }
  }
  return find(1, "1");
};
var temp = findSolution(5)
console.log("5 " + (temp ? "is reached by " + temp : "cannot be reached"));
console.log("24 is reached by " + findSolution(24));
