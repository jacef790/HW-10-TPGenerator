//Engineer constructor

class Engineer extends Employee {
    constructor(name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
    }
    
    getGitHub(){

    }

    getRole(){

    }
}

module.exports = Engineer