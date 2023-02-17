// array
// let arr = ["Harry", "Ron", "Snap"];

// arr.forEach((person) => {
//   console.log(person);
// });

// ------------------

// object
// let Harry = {
//   name: "Harry Potter",
//   married: true,
//   sayHi() {
//     console.log("Harry says hi to you.");
//   },
// };

// console.log(Harry.name);
// console.log(Harry["name"]);

// Harry.sayHi();

// ------------------

//function
// function add(n1, n2) {
//   console.log(n1 + n2);
// }

// add(8, -4);

// function add(n1, n2) {
//   return n1 + n2;
// }

// let result = add(10, 15);
// console.log(result);

// ------------------

// class
let c1 = {
  raduis: 5,
  getArea() {
    return Math.PI * this.raduis * this.raduis;
  },
};

console.log(c1.raduis);
console.log(c1.getArea);

let c2 = {
  raduis: 10,
  getArea() {
    return Math.PI * this.raduis * this.raduis;
  },
};

console.log(c1.raduis);
console.log(c1.getArea);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let c3 = new Circle(5);
console.log(c3.radius);
console.log(c3.getArea());

let c4 = new Circle();
