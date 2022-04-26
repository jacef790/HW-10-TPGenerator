//Manager constructor

class manager {
    constructor(name, ID, email, office) {
        super(name, ID, email)
        this.office = office
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = manager;