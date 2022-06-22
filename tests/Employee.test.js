const Employee = require('../lib/Employee');
const employee = new Employee('Lisa', '1', 'lisa@test.com');

test('test if we can get the constructor values for employee object', () => {
    expect(employee.name).toBe('Lisa');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('lisa@test.com');
});

test('test if we can retrieve employee name using getName() method', () => {
    expect(employee.getName()).toBe('Lisa');
});

test('test if we can retrieve employee id using getId() method', () => {
    expect(employee.getId()).toBe('1');
});

test('test if we can retrieve employee email using getId() method', () => {
    expect(employee.getEmail()).toBe('lisa@test.com');
});

test('test if we can retrieve employee role using getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});