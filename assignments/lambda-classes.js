// CODE here for your Lambda Classes
class person {
    constructor(attributes) {
        this.name = attributes.name,
            this.age = attributes.age,
            this.location = attributes.location
    } // methods here
    speak() {
        return `Hello my name is ${this.name}, I am from  ${this.location}`;
    }

} // closesperson

// test person

const mack = new person({
    name: 'Mack',
    location: 'Kansas',
    age: 38

});

const sharon = new person({
    name: 'Sharon',
    location: 'Detroit',
    age: 52

});


console.log(mack.speak());
console.log(sharon.speak());

//instructor inherits from person

class instructor extends person {
    constructor(instructorAttributes) {
        super(instructorAttributes); // super replaces parent.call
        this.specialty = instructorAttributes.specialty
        this.favLanguage = instructorAttributes.favLanguage
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    aboutMe() {
        return `Hi my name is ${this.name}, I am ${this.age} and I live in 
${this.location}. My favorite programming language is ${this.favLanguage}. 
${this.specialty} development is what I do. So as we say in ${this.location}...
"${this.catchPhrase}" `
    }


}

//test instructor

const ryan = new instructor({
    name: 'Ryan',
    location: 'Maryland',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Love will conquer all`
});

const steffi = new instructor({
    name: 'steffi',
    location: 'New Jersey',
    age: 28,
    favLanguage: 'Ruby on Rails',
    specialty: 'Database',
    catchPhrase: `This is it`
});


console.log(ryan.aboutMe())
console.log(steffi.aboutMe())


//student inherits from persons

class student extends person {
    constructor(studentAttributes) {
        super(studentAttributes); // super replaces call
        this.studentPreviousBackground = studentAttributes.studentPreviousBackground
        this.className = studentAttributes.className
        this.favSubjects = studentAttributes.favSubjects
        this.listSubjects = studentAttributes.listSubjects
    }
    listsSubjects(subject) {
        return `${subject}`
    }

    PRAssignment(student, subject) {
        return `${student} has submitted a PR for ${subject}`
    }

    sprintChallenge(student, subject) {
        return `${student} has begun sprint challenge on ${subject}`
    }

}

// test students

const sally = new student({
    name: 'Sally',
    location: 'Bronx, New York',
    age: 37,
    background: 'JavaScript',
    className: 'CS 32',
    favsubjects: ['Html', 'CSS', 'JavaScript'],

});


console.log(sally.PRAssignment('sally', 'js'));
console.log(sally.sprintChallenge('Sally', 'Advance JS-III'));

//Project Manager inherits from Instructors


class projectManager extends instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName
        this.favInstructor = PMAttributes.favInstructor
    }

    standUp(name, channel) {
        return `${name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`
    }

}

// tests project manager

const sam = new projectManager({
    name: 'Sam Wright',
    location: 'California',
    age: 38,
    gradClassName: 'C51',
    favInstructor: 'Sean',
    catchPhrase: `Big, bad, bold and beautiful`
});

console.log(sam.debugsCode('Sam-W', 'Sally Field', 'Javascript'));
console.log(sam.debugsCode('JavaVick', 'Brit Hemming', 'Javascript'));
console.log(sam.standUp('Sam-W', 'web25'));