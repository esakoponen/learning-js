// fizzbuzz
var number = 0;
while(number <= 100) {

  if(number % 3 == 0 && number % 5 == 0) {
    console.log(number + " FizzBuzz")
  }
  else if (number % 3 == 0) {
    console.log(number + " Fizz")
  }
  else if (number % 5 == 0) {
    console.log(number + " Buzz")
  }
  else {
    console.log(String(number))
  }
  number = number + 1
}
