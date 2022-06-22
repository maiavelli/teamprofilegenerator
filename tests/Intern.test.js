const Intern = require('../lib/Intern');
const intern = new Intern('Lisa', '1', 'lisa@test.com', 'Northwestern');

test('test if we can get the constructor values for intern object', () => {
    expect(intern.name).toBe('Lisa');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('lisa@test.com');
    expect(intern.school).toBe('Northwestern');
});

test('test if we can retrieve intern name using getName() method', () => {
    expect(intern.getName()).toBe('Lisa');
});

test('test if we can retrieve intern id using getId() method', () => {
    expect(intern.getId()).toBe('1');
});

test('test if we can retrieve intern email using getId() method', () => {
    expect(intern.getEmail()).toBe('lisa@test.com');
});

test('test if we can retrieve intern office number using getSchool() method', () => {
    expect(intern.getSchool()).toBe('Northwestern');
});

test('test if we can retrieve intern role using getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});