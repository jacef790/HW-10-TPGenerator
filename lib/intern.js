//Intern constructor

class intern {
    constructor(name, ID, email, school) {
        super(name, ID, email)
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.school = school;

    }

    getSchool(){

    }

    getRole(){
        return 'Intern';
    }
}