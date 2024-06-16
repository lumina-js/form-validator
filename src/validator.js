import { checkCustomPattern, checkEmail, checkEqual, checkMaxLength, checkMaxValue, checkMinLength, checkMinValue, checkPassword, checkUrl, isRequired } from "./utils"

export default class Validator {
    constructor(data) {
        this.data = data
        this.errors = {}
        this.id = ""
        this.elem = ""
    }

    attr(elem) {
        this.id = elem
        return this
    }

    label(elem) {
        this.elem = elem
        return this
    }
    
    required() {
        let value = this.data[this.id]
        if(!isRequired(value)) {
            this.error(this.id, `${this.elem} field is required`)
        }
        return this
    }

    integer() {
        let value = this.data[this.id]
        this.data[this.id] = parseInt(value)
        return this
    }

    minValue(size) {
        let value = this.data[this.id]
        if(!checkMinValue(value, size)) {
            this.error(this.id, `${this.elem} minimum value is ${size}`)
        }
        return this
    }

    maxValue(size) {
        let value = this.data[this.id]
        if(!checkMaxValue(value, size)) {
            this.error(this.id, `${this.elem} maximum value is ${size}`)
        }
        return this
    }

    minLength(size) {
        let value = this.data[this.id]
        if(!checkMinLength(value, size)) {
            this.error(this.id, `${this.elem} must be atleast ${size} of length`)
        }
        return this
    }

    maxLength(size) {
        let value = this.data[this.id]
        if(!checkMaxLength(value, size)) {
            this.error(this.id, `${this.elem} must be maximum ${size} of length`)
        }
        return this
    }

    url() {
        let value = this.data[this.id]
        if(!checkUrl(value)) {
            this.error(this.id, `${this.elem} is not a valid URL`)
        }
        return this
    }

    email() {
        let value = this.data[this.id]
        if(!checkEmail(value)) {
            this.error(this.id, `${this.elem} is not a valid email`)
        }
        return this
    }

    password() {
        let value = this.data[this.id]
        if(!checkPassword(value)) {
            this.error(this.id, `${this.elem} is not a valid password`)
        }
        return this
    }

    pattern(pat) {
        let value = this.data[this.id]
        if(!checkCustomPattern(value, pat)) {
            this.error(this.id, `${this.elem} is not matched with pattern`)
        }
        return this
    }

    equals(val) {
        let value = this.data[this.id]
        if(!checkEqual(value, val)) {
            this.error(this.id, `${this.elem} is not equal to the value`)
        }
        return this
    }

    error(id, value) {
        if(this.errors[id] == "" || this.errors[id] == undefined)
            this.errors[id] = value
    }

    getErrors() {
        return this.errors
    }

    isSuccess() {
        return Object.keys(this.errors).length == 0
    }
}