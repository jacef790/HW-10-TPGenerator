//Manager constructor

class Manager extends Employee {
    constructor(name, ID, email, office) {
        super(name, ID, email)
        this.office = office
    }

    getRole(){
        return 'Manager';
    }

    getOffice(){
        return this.office
    }
}

module.exports = Manager;