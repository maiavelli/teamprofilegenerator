const Manager = require('..lib/Manager');
const manager = new Manager('Lisa', '1', 'lisa@test.com', '300');

test('test if we can get the constructor values for manager object', () => {
    expect(manager.name).toBe('Lisa');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('lisa@test.com');
    expect(manager.officeNumber).toBe('300');
});

test('test if we can retrieve manager name using getName() method', () => {
    expect(manager.getName()).toBe('Lisa');
});

test('test if we can retrieve manager id using getId() method', () => {
    expect(manager.getId()).toBe('1');
});

test('test if we can retrieve manager email using getId() method', () => {
    expect(manager.getEmail()).toBe('lisa@test.com');
});

test('test if we can retrieve manager office number using getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('300');
});

test('test if we can retrieve manager role using getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});