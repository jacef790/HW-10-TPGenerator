//Intern constructor

class intern {
    constructor(name, ID, email, school) {
        super(name, ID, email)
        this.school = school;

    }

    getSchool(){

    }

    getRole(){
        return 'Intern';
    }
}

module.exports = intern;