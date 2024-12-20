import { 
    checkMinValue, 
    isRequired, 
    checkMaxValue, 
    checkMinLength,
    checkMaxLength,
    checkUrl,
    checkEmail,
    checkPassword,
    checkCustomPattern,
    checkEqual,
    checkInteger,
    checkString,
    checkFile,
    checkMaxFileSize,
    checkFileTypes
} from "../dist";
import { emailPattern } from "../dist/patterns";

test('Check isRequired', () => {
    expect(isRequired('Naruto')).toBe(true)
    expect(isRequired([1, 2, 3])).toBe(true)
    expect(isRequired({ name: 'Naruto' })).toBe(true)
    expect(isRequired('')).toBe(false)
    expect(isRequired(null)).toBe(false)
    expect(isRequired(undefined)).toBe(false)
    expect(isRequired([])).toBe(false)
    expect(isRequired()).toBe(false)
    expect(isRequired({})).toBe(false)
})

test('Test checkMinValue', () => {
    expect(checkMinValue(10, 8)).toBe(true)
    expect(checkMinValue(5, 8)).toBe(false)
})

test('Test checkMaxValue', () => {
    expect(checkMaxValue(10, 8)).toBe(false)
    expect(checkMaxValue(5, 8)).toBe(true)
})

test('Test checkMinLength', () => {
    expect(checkMinLength([1, 2, 3], 2)).toBe(true)
    expect(checkMinLength('Naruto', 5)).toBe(true)
    expect(checkMinLength([1, 2, 3], 5)).toBe(false)
    expect(checkMinLength('Naruto', 10)).toBe(false)
})

test('Test checkMaxLength', () => {
    expect(checkMaxLength([1, 2, 3], 2)).toBe(false)
    expect(checkMaxLength('Naruto', 5)).toBe(false)
    expect(checkMaxLength([1, 2, 3], 5)).toBe(true)
    expect(checkMaxLength('Naruto', 10)).toBe(true)
})

test('Test checkUrl', () => {
    expect(checkUrl('this is a url')).toBe(false)
    expect(checkUrl('https://google.com')).toBe(true)
})

test('Test checkEmail', () => {
    expect(checkEmail('narutogmail.com')).toBe(false)
    expect(checkEmail('naruto@gmail')).toBe(false)
    expect(checkEmail('naruto@gmail.com')).toBe(true)
})

test('Test checkPassword', () => {
    expect(checkPassword('password')).toBe(false)
    expect(checkPassword('Password')).toBe(false)
    expect(checkPassword('Passw0rd')).toBe(false)
    expect(checkPassword('P@ss')).toBe(false)
    expect(checkPassword('P@ssw0rd')).toBe(true)
})

test('Test checkCustomPattern', () => {
    expect(checkCustomPattern('naruto@yopmail.com', emailPattern)).toBe(true)
    expect(checkCustomPattern('naruto', emailPattern)).toBe(false)
})

test('Test checkEqual', () => {
    expect(checkEqual('naruto', 'boruto')).toBe(false)
    expect(checkEqual(2, 3)).toBe(false)
    expect(checkEqual('naruto', 'naruto')).toBe(true)
    expect(checkEqual(2, 2)).toBe(true)
})

test('Test checkInteger', () => {
    expect(checkInteger('2')).toBe(false)
    expect(checkInteger(2)).toBe(true)
})

test('Test checkString', () => {
    expect(checkString(2)).toBe(false)
    expect(checkString('2')).toBe(true)
})

test('Test files', () => {
    const content = new Array(1024 * 1024).fill('a').join('');
    let firstFile = new File([content], "example.png", { type: "image/png"  }); // 1MB PNG
    let secondFile = new File([content], "example.jpg", { type: 'image/jpeg' }); // 1MB JPG

    expect(checkFile(firstFile)).toBe(true)
    expect(checkFile('example.png')).toBe(false)
    expect(checkFile(secondFile)).toBe(true)

    expect(checkMaxFileSize(firstFile, 2 * 1024 * 1024)).toBe(true)
    expect(checkMaxFileSize(firstFile, 0.5 * 1024 * 1024)).toBe(false)
    expect(checkMaxFileSize(secondFile, 1 * 1024 * 1024)).toBe(true)

    expect(checkFileTypes(firstFile, ['image/png', 'video/mp4'])).toBe(true)
    expect(checkFileTypes(firstFile, ['video/*'])).toBe(false)
    expect(checkFileTypes(secondFile, ['image/*'])).toBe(true)
    expect(checkFileTypes(secondFile, ['image/png', 'video/mp4'])).toBe(false)
})