// Your code here

class Polygon {
    constructor (sides) {
        this.sides=sides;
    }
get countSides() {
 return this.sides.length;
}

get perimeter() {
    let sum = 0;
    for (let side of this.sides) {
        sum +=side;
    }
    return sum;
}
}

class Triangle extends Polygon {
    
    get isValid() {
        let [a, b, c] = this.sides;
        return (a + b > c) && (b + c > a) && (c + a > b);
      }

}

class Square extends Polygon {

    get area() {
        let [a] = this.sides;
        return a * a;
    }
    get isValid() {
        let [a,b,c,d] = this.sides;
        return ((a === b) && (b === c) && (c=== d))
    }
    
}