const fs = require('fs');
const { userInfo } = require('os');

class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const TamLe = new Student('Le Van Tam', 22, 'tamle.dev@gmail.com');
const LeA = new Student('Le A', 20, 'LeA@gmail.com');

const listStudent = [TamLe, LeA];

const result = JSON.stringify(listStudent);

fs.writeFileSync('studentJson.json', result);

const getStudent = () => {
    const data = fs.readFileSync('studentJson.json');
    return data;
}

const studentJSON = getStudent();
const student = JSON.parse(studentJSON);

exports.getListStudent = JSON.stringify(student);

