// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name
        this.age = personAttributes.age
        this.location = personAttributes.location

    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes)

        this.specialty = instructorAttributes.specialty
        this.favLanguage = instructorAttributes.favLanguage
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    adjustGrade(student) {
        
        let addSubtract = Math.floor(Math.random() * (5 - 2) + 2)
        console.log(addSubtract)
        if(addSubtract <= 3) {
            student.grade += 5
        } else {

            student.grade -= 5
        }
    }
}

class Student extends Person{
    constructor(studentAttributes) {
        super(studentAttributes)

        this.previousBackground = studentAttributes.previousBackground
        this.className = studentAttributes.className
        // array of favorite subjects
        this.favSubjects = studentAttributes.favSubjects
        this.grade = studentAttributes.grade
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element)
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)

    }
    graduate() {
        if(this.grade >= 70) {
            console.log(`${this.name} has graduated!`)
        } else {
            console.log(`${this.name} has a few more lessons to go`)
        }
        
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerattributes) {
        super(projectManagerattributes)

        this.gradClassName = projectManagerattributes.gradClassName
        this.favInstructor = projectManagerattributes.favInstructor
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @${slackChannel} standup times!​​​​​`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}
console.log("testing lambda classes")
const person1 = new Person({
    name: "name 1",
    age: 25,
    location: "middle of nowhere"
})

const person2 = new Person({
    name: "name 2",
    age: 35,
    location: "Hong Kong"
})
person1.speak()
person2.speak()

const Instructor1 = new Instructor({
    
    name: "name 3",
    age: 28,
    location: "middle of nowhere 2",
    specialty: "React",
    favLanguage: "JS",
    catchPhrase: "code!"
})

const Instructor2 = new Instructor({
    name: "name 4",
    age: 30,
    location: "middle of nowhere 4",
    specialty: "Veu",
    favLanguage: "JS",
    catchPhrase: "This is a terribly boring catchphrase."
})


const student1 = new Student({
    
    name: "name 5",
    age: 35,
    location: "middle of nowhere 5",
    previousBackground: "SSU",
    className: "WEB25",
    favSubjects: ["JS", "HTML", "LESS"],
    grade: 69
})

const student2 = new Student({
    name: "name 6",
    age: 40,
    location: "middle of nowhere 6",
    previousBackground: "StreetSmartUniversity",
    className: "UI12",
    favSubjects: ["HTML", "PHP", "SQL"],
    grade: 74
})

Instructor1.demo("HTML")
Instructor2.demo("LESS")

Instructor1.grade(student1, "HTML")
Instructor2.grade(student2, "LESS")

console.log("start of stretch goals")
// run multiple times as adding or subtracting is random
Instructor1.adjustGrade(student1)
console.log(student1.grade)
student1.graduate()
console.log("end of stretch goals")
student1.listsSubjects()
student2.PRAssignment("JS")
student1.sprintChallenge("LESS")

const projectManager1 = new ProjectManager({
    name: "Gandalf Jr.",
    age: 24,
    location: "Always on the move",
    specialty: "AngularJS",
    favLanguage: "JS",
    catchPhrase: "You shall not pass!",
    gradClassName: "WEB25",
    favInstructor: "Tim"

})

const projectManager2 = new ProjectManager({
    name: "Abe NULL",
    age: 56,
    location: "Alabama",
    specialty: "Debugging",
    favLanguage: "C",
    catchPhrase: "I know kung fu.",
    gradClassName: "WEB12",
    favInstructor: "Sean"

})

projectManager1.standUp("WEB25_Gandalf Jr.")


projectManager2.debugsCode(student2, "LESS")
