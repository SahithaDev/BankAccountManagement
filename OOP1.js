class Student {
  name;
  rno;
  marks;
  static population = 0;

  constructor(name, rno, marks) {
    this.name = name;
    this.rno = rno;
    this.marks = marks;
    Student.population = 50;
  }
  greet() {
    console.log("hello");
  }

  static function2(student1) {
    student1.greet();
  }
}
const student1 = new Student("sahitha", 75, 98);
console.log(Student.population);
console.log(student1);
Student.function2(student1);
