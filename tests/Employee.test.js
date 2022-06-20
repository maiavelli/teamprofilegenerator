const Employee = require('..lib/Employee');

test('generate new employee object', () => {
    const newEmployee = new Employee('Lisa', '1', 'lisa@test.com');

    expect(typeof newEmployee).toBe('object');
});

test('generate employee name', () => {
    const name = 'Lisa';
    const newEmployee = new Employee('Lisa', '1', 'lisa@test.com');

    expect(newEmployee.name).toBe(name);
});

test('generate employee ID', () => {
    const id = '1';
    const newEmployee = new Employee('Lisa', '1', 'lisa@test.com');

    expect(newEmployee.id).toBe(id);
});

test('generate employee email', () => {
    const email = 'lisa@test.com';
    const newEmployee = new Employee('Lisa', '1', 'lisa@test.com');

    expect(newEmployee.email).toBe(email);
});

test('generate employee role', () => {
    const role = 'Employee';
    const newEmployee = new Employee('Lisa', '1', 'lisa@test.com');

    expect(newEmployee.getRole()).toBe(role);
});