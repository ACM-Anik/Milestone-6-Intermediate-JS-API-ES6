// 1.
const student = {
    name: 'Anik C Mojumder',
    age:21,
    isMale: true,
    nationality: 'Bangladeshi',
    livesIn: 'Noakhali, Bangladesh',
    qualification: 'HSC and Honours running',
    majorExamYears: [2012, 2015, 2018, 2020],
    studyOn: 'Honours(Accounting)',
    subjects: {
        fistYear: ['Accounting', 'Finance', 'Independent Bangladesh', 'Micro Economics'],
        secondYear: ['Intermediate Accounting', 'Business Math', 'Statistics', 'Tax', 'Macro Economics'],
    },
    firstYearExam: function(){
        console.log(this.name);
        return this.nationality;
    }
    
    
}
const output = student.firstYearExam();
console.log(output);



// 2.
const mathBool = (num1, num2) => {
    const result = (num1 + num2) / 2;
    if(result % 2 === 0){
        return true;
    }
    else{return false;}
}
const result = mathBool(10, 10);
console.log(result);


