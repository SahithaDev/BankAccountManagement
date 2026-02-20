class Box {
  l;
  w;
  h;

  constructor(l, w, h) {
    this.l = l;
    this.w = w;
    this.h = h;
  }
}
class square extends Box {
  constructor(l, w, h, weight) {
    super(l, w, h);
    this.weight = weight;
  }
}
class BoxPrice extends square {
  constructor(l, w, h, weight, price) {
    super(l, w, h, weight);
    this.price = price;
  }
}
const newBox = new square(2, 2, 2, 5);
const newBox1 = new Box(2, 2, 2);
const newBox2 = new BoxPrice(2, 2, 2, 5, 200);
console.log(newBox);
console.log(newBox2);
console.log(newBox1);
