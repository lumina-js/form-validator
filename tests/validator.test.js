import { Validator } from "../index.js"

test('Check invalid email :: ', () => {
    const validator = new Validator({
        name: 'Naruto Uzumaki',
        age: 18,
        email: 'narutoyopmail.com'
    })

    validator.attr('name').label('Name').required()
    validator.attr('age').label('Age').required().integer()
    validator.attr('email').label('Email').required().email()

    expect(validator.isSuccess()).toBe(false)
    expect(validator.getErrors()).toEqual({
        email: 'Email is not a valid email format'
    })
})

test('Check multiple invalid inputs :: ', () => {
    const validator = new Validator({
        name: '',
        age: '18',
        email: 'naruto'
    })

    validator.attr('name').label('Name').required()
    validator.attr('age').label('Age').required().integer()
    validator.attr('email').label('Email').required().email()

    expect(validator.isSuccess()).toBe(false)
    expect(validator.getErrors()).toEqual({
        email: 'Email is not a valid email format',
        name: 'Name is required',
        age: 'Age is not a valid integer'
    })
})

test('Check valid inputs :: ', () => {
    const validator = new Validator({
        name: 'Naruto Uzumaki',
        age: 20,
        email: 'naruto@yopmail.com'
    })

    expect(validator.isSuccess()).toBe(true)
})