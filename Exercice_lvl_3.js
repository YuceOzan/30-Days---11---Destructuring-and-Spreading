import { countries_data } from "./Countries.js";


//1. DESTRUCTURE COUNTRIES OBJECT AND PRINT NAME, CAPITAL, POPULATION AND LANGUAGES OF ALL COUNTRIES

/*
for (const {name, capital, population, languages} of countries_data){
    console.log(name, capital, population, languages)
};
*/

//2. DESTRUCTURE ARRAY TO NAME, SKILLS, SCORES, JSSCORE AND REACTSCORE IN ONE LINE

const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];


let [name, skills, [, , jsScore, reactScore]] = student;


console.log(name, skills, jsScore, reactScore);

//3. WRITE A FUNCTION CALLED "CONVERT ARRAY TO OBJECT" TO CONVERT ARRAY TO OBJECT STRUCTURE



function convertArrayToObject (studentArray){
    const [name, skills, scores] = studentArray;
    const formattedSkills = skills.map(skill => skill);

    const [jsScore, cssScore, htmlScore, reactScore] = scores;
    return {
        name,
        skills : formattedSkills,
        scores: {
            jsScore,
            cssScore,
            htmlScore,
            reactScore
        }
    }

};

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
const convertedStudents = students.map(convertArrayToObject)
console.log(convertedStudents);


//4. COPY THE STUDENT OBJECT TO NEWSTUDENT WITHOUT MUTATING ORIGINAL OBJECT

const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

 
const newStudent = {... student1};
newStudent.skills.frontEnd.push({ skill: "Bootsrap", level: 8});
newStudent.skills.backEnd.push({ skill: "Express", level: 9});
newStudent.skills.dataBase.push({ skill: "SQL", level: 8});
newStudent.skills.dataScience.push("SQL");

console.log(newStudent);