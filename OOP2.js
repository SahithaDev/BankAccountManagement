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
const newBox = new square(2, 2, 2, 5);
const newBox1 = new Box(2, 2, 2);
console.log(newBox);
console.log(newBox1);
