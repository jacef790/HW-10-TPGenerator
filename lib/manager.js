//Manager constructor

class manager {
    constructor(name, ID, email, office) {
        super(name, ID, email)
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.office = office
    }

    getRole(){
        return 'Manager';
    }
}