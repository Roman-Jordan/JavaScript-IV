// CODE here for your Lambda Classes



class Person{
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak(){
        return `Hello my name is ${this.name} I am from`
    }
}

class Instructors extends Person{
    constructor(instData){
        super(instData);
        this.specialty = instData.specialty;
        this.favLanguage = instData.favLanguage;
        this.catchPhrase = instData.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`
    }
    randomPoints(student){
        let random =  Math.floor(Math.random()*15); 
        return student.grade % 2 === 0 ? student.grade + random: student.grade - random; 
    }
}

class Project_Manager extends Instructors{
    constructor(pmData){
        super(pmData);
    }

    standUp(name,channel){
        return `${name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student,subject){
        return `${this.name}  debugs ${student.name}'s code on ${subject}`;
    }
}

class Students extends Person{
    constructor(stuData){
        super(stuData);
        this.listsSubjects = stuData.listsSubjects;
        this.grade = stuData.grade;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    PRSprint(subject){
        `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate(instructor){
        this.grade = instructor.randomPoints(this);
        return this.grade > 70 ? 
        `I suppose you can graduate: ${this.grade}` : 
        `Your Stuck another Week: ${this.grade}`;
    }
}

const Josh = new Instructors({
    name: 'Josh Knell',
    location: 'California',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Come At me Bro`
  });

  const Roman = new Students({
    name: 'Roman',
    location: 'Jordan',
    age: 31,
    gender: 'male',
    favLanguage: 'PHP',
    specialty: 'DataConversion and Catching',
    catchPhrase: `Suck it easy Bro`,
    grade : 20
  });

  const Enoka = new Project_Manager({
    name: 'Enoka',
    location: 'Utah',
    age: 32,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Code Review',
    catchPhrase: `Fail`
  });
  const student = new Students({
      name  : 'Roman',
      grade : Math.floor(Math.random() * 101)
  });

  //console.log(student.graduate());
  console.log(Enoka.debugsCode(student,'JavaScript'));
  console.log(Roman.graduate(Josh));
 
