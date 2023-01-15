class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollnumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollnumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Hamza", 33, "std34");
const student2 = new Student("Hamza", 13, "std134");
const Instructor1 = new Instructor("Hamza", 23, 56);
const course1 = new Course("course1", "Meta");
const course2 = new Course("course2", "Block");
const department1 = new Department("CS");
department1.addCourse(course1);
console.log(department1);
export {};
// course1.addStudent(student1)
// course1.setInstructor(Instructor1)
//console.log(course1.instructor);
//student1.registerForCourses("PIA")
