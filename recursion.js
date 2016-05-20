function isEven(number) {
  if (number == 0) {
    return true
  }
  else if (number == 1) {
    return false
  }
  else if (number < 0)
    return 'error: number needs to be positive integer'
  else {
    return isEven(number - 2)
  }
}

console.log("-1: " + isEven(-1))
console.log(" 0: " + isEven(0))
console.log(" 1: " + isEven(1))
console.log("22: " + isEven(22))
console.log("23: " + isEven(23))
