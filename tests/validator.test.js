import { Validator } from "../index.js"

test('Test validator :: ', () => {
    const validator = new Validator({
        name: 'Naruto Uzumaki',
        age: 18,
        email: 'narutoyopmail.com'
    })

    validator.attr('name').label('Name').required()
    validator.attr('age').label('Age').required().integer()
    validator.attr('email').label('Email').required().email()

    expect(validator.isSuccess()).toBe(false)
})