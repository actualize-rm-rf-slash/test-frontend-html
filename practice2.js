// Equality check
var x = 10;
if (x === "10") {
  console.log("equal");
} else {
  console.log("not equal");
}

// Falsey values
x = 3;
if (null) {
  x = x + 1;
}
if (false) {
  x = x + 1;
}
if (0) {
  x = x + 1;
}
if ("") {
  x = x + 1;
}
console.log(x);

// Functions
function printLyrics() {
  console.log("Now this is a story all about how");
  console.log("Now this is a story all about how");
  console.log("Now this is a story all about how");
  console.log("Now this is a story all about how");
}

printLyrics();

// Scope
x = 100;
function addOne(num) {
  x = 1;
  return num + x;
}
console.log(x); // 100
console.log(addOne(5)); // 6
console.log(x); // 100

// JavaScript objects vs. Ruby classes
var boat = {
  name: "S. S. Minnow",
  color: "white",
  price: 20000,
  tax: function() {
    return this.price * 0.09;
  },
  total: function() {
    return this.price + this.tax();
  }
};

console.log(boat);
console.log(boat["name"]);
console.log(boat["color"]);
console.log(boat["price"]);

console.log(boat.name);
console.log(boat.color);
console.log(boat.price);

console.log(boat.tax());
console.log(boat.total());

// forEach loop
var numbers = [2, 4, 1, 4];
numbers.forEach(function(number) {
  console.log("Your number is " + number);
});
