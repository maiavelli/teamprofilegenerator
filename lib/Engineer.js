// require employee parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    //inheriting name, id, and email from parent class
    constructor(name, id, email, github) {
        super(name, id, email);
    // property that is unique to engineer role
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}


// allow for export to index.js
module.exports = Engineer;