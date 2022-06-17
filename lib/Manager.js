// require employee parent class
const Employee = require('./Employee');

class Manager extends Employee {
    //inheriting name, id, and email from parent class
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
    // property that is unique to manager role
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}


// allow for export to index.js
module.exports = Manager;