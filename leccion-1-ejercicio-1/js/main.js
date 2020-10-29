"use strict";

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return Math.pow(side, 2);
  }
}

const aSquare = new Square();
console.log(aSquare.perimeter(9));
console.log(aSquare.area(9));
