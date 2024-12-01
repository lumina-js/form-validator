import { Validator } from "../dist"

test('Check invalid email :: ', () => {
    const validator = new Validator({
        name: 'Naruto Uzumaki',
        age: 18,
        email: 'narutoyopmail.com',
        phone: 'okay'
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
        email: 'naruto',
        phone: 'okay'
    })

    validator.attr('name').label('Name').required()
    validator.attr('age').label('Age').required().integer()
    validator.attr('email').label('Email').required().email()
    validator.attr('phone').label('Phone Number').extend((value) => {
        return typeof(value) === 'number'
    })

    expect(validator.isSuccess()).toBe(false)
    expect(validator.getErrors()).toEqual({
        email: 'Email is not a valid email format',
        name: 'Name is required',
        age: 'Age is not a valid integer',
        phone: 'Phone Number is not a valid value'
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

test('Check Files :: ', () => {
    const content = new Array(1024 * 1024).fill('a').join('');
    let firstFile = new File([content], "example.png", { type: "image/png"  }); // 1MB PNG
    let secondFile = new File([content], "example.jpg", { type: 'image/jpeg' }); // 1MB JPG

    const validator = new Validator({
        'firstFile' : firstFile,
        'secondFile' : secondFile
    })

    validator.attr('firstFile').label('First File').file().maxSize(2 * 1024 * 1024).allowedTypes(['image/*'])
    validator.attr('secondFile').label('Second File').file().maxSize(1 * 1024 * 1024).allowedTypes(['image/jpeg'])
    
    expect(validator.isSuccess()).toBe(true)
})