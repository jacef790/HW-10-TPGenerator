const Employee = require('./employee')

//Intern constructor

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email)
        this.school = school;

    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;