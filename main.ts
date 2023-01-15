class Person{
    name: string
    age: number

    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name
    }
}

class Student extends Person {
    rollnumber: string
    courses: Course[] = []
    
    constructor(name: string, age: number, rollNumber: string){
        super(name, age)
        this.rollnumber = rollNumber
    }

    registerForCourses(course:Course){
        this.courses.push(course)
    }
}


class Instructor extends Person{
    private salary:number
    courses:Course[] = []

    constructor(name: string, age: number, salary: number){
        super(name,age)
        this.salary = salary
    }

    assignCourse(course:Course){
        this.courses.push(course)
    }
}

class Course {
    id: string
    name: string
    students: Student[] = []
    instructor!: Instructor

    constructor(id: string, name: string){
        this.id = id
        this.name = name
    }

    addStudent(student:Student){
        this.students.push(student)
        student.registerForCourses(this)
    }
    setInstructor(instructor: Instructor){
        this.instructor = instructor
        instructor.assignCourse(this)
    }
}

class Department{
    name:string
    courses:Course[] = []

    constructor(name:string){
        this.name = name
    }

    addCourse(course: Course){
        this.courses.push(course)
    }
    
    
}

const student1 = new Student("Hamza", 33, "std34")
const student2 = new Student("Hamza", 13, "std134")

const Instructor1 = new Instructor("Hamza", 23, 56)

const course1 = new Course("course1", "Meta")


const course2 = new Course("course2", "Block")

const department1 = new Department("CS")
department1.addCourse(course1)

console.log(department1);

// course1.addStudent(student1)
// course1.setInstructor(Instructor1)
//console.log(course1.instructor);
//student1.registerForCourses("PIA")