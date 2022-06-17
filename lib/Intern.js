// require employee parent class
const Employee = require('./Employee');

class Intern extends Employee {
    //inheriting name, id, and email from parent class
    constructor(name, id, email, school) {
        super(name, id, email);
    // property that is unique to intern role
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}


// allow for export to index.js
module.exports = Intern;