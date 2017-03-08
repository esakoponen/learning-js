var colors = ['red', 'blue', 'green'];
colors.push('yellow');
colors.sort();

var numbers = [2,55,21,66,43,1,9,7,0,1000];
console.log(numbers)

// By default, the sort() method sorts the values as
// strings in alphabetical and ascending order. Because
// of this, the sort() method will produce an incorrect
// result when sorting numbers.
var ascending = function(a, b) { return a-b; }
var descending = function(a, b) { return b-a; }
numbers = numbers.sort(ascending);
console.log(numbers)

var fruit = 'banana';
switch(fruit) {
    case "banana":
        //alert("I hate bananas!");
        break;
    case "apple":
        //alert("I love apples!")
        break;
    default:
        //alert("I love all other fruits")
        break;
}

// Object literal
var person = {
    firstname: "Joe",
    lastname: "Bradford",
    age: 11,
    children: ['Joanna', 'Katie'],
    address: {
        street: '555 Something st.',
        city: 'Boston',
        state: 'MA'
    },
    fullName: function () {
        return this.firstname + " " + this.lastname;
    }
}
console.log("Age: " + person.age);
console.log(person.fullName());


// Object constructor
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.describe = function() {
    return 'an apple is the color '+this.color+' and shape is '+this.shape+'.';
}
console.log(apple);
console.log(apple.describe());

// Constructor pattern
function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function () {
        return 'A ' + this.name + ' is ' + this.color + ' and ' + this.shape + '.'
    }
}

var apple = new Fruit('apple', 'shiny red', 'very round')
console.log(apple);
console.log(apple.describe());

var melon = new Fruit('melon', 'green', 'round')
console.log(melon);
console.log(melon.describe());

// Arrays of objects
var users = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Mary Doe',
        age: 40
    },
    {
        name: 'Ben Doe',
        age: 50
    },
];

// Events ('clicks', 'scrolls', etc.) and event handling
// ps. you don't want to mix JS with HTML
function doClick() {
    alert('You clicked');
}

var times = 0;
var startTime;
function changeText() {

    if (times == 0) {
        startTime = new Date();
    }

    var now = new Date();
    if ( (now - startTime) / 1000 > 3 ){
        console.log("elapsed 3 seconds: you clicked " + times + " times!");
    }
    else
    {
        times++;
    }

    var header2 = document.getElementById('header2')
    header2.innerHTML = 'You have clicked ' + times + ' times!';

    // Set the date
    var date = document.getElementById('date');
    date.innerHTML = Date();
}

function resetCounter() {
    console.log("counter is reset");
    times = 0;
    var header2 = document.getElementById('header2')
    header2.innerHTML = 'You have clicked ' + times + ' times!';
}

function validateForm() {
    var firstName = document.forms['myForm']['firstName'].value;

    // Make sure name is given
    if (firstName == null || firstName == "") {
        alert("First name is required");
        return false;
    }
    // Make sure that name is long enough

    if (firstName.length < 3) {
        alert("First name must have 3 characters or more");
        return false;
    }
}
