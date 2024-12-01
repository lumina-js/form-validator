import { IValidatorData, IValidatorErrors } from "./types/validatorTypes"
import { 
    checkCustomPattern, 
    checkEmail, 
    checkEqual, 
    checkInteger, 
    checkMaxLength, 
    checkMaxValue, 
    checkMinLength, 
    checkMinValue, 
    checkPassword, 
    checkUrl, 
    isRequired,
    checkString,
    checkFile,
    checkMaxFileSize,
    checkFileTypes
} from "./utils"

export default class Validator {
    errors: IValidatorErrors = {}
    id: any = ""
    elem: any = ""
    data: IValidatorData = {}
    constructor(data: IValidatorData) {
        this.data = data
        this.errors = {}
        this.id = ""
        this.elem = ""
    }

    attr(elem: string) {
        this.id = elem
        return this
    }

    label(elem: string) {
        this.elem = elem
        return this
    }
    
    required() {
        let value = this.data[this.id]
        if(!isRequired(value)) {
            this.error(this.id, `${this.elem} is required`)
        }
        return this
    }

    integer() {
        let value = this.data[this.id]
        if(!checkInteger(value)) {
            this.error(this.id, `${this.elem} is not a valid integer`)
        }
        return this
    }

    string() {
        let value = this.data[this.id]
        if(!checkString(value)) {
            this.error(this.id, `${this.elem} is not a valid string`)
        }
        return this
    }

    minValue(size: number) {
        let value = this.data[this.id]
        if(!checkMinValue(value, size)) {
            this.error(this.id, `${this.elem} minimum value is ${size}`)
        }
        return this
    }

    maxValue(size: number) {
        let value = this.data[this.id]
        if(!checkMaxValue(value, size)) {
            this.error(this.id, `${this.elem} maximum value is ${size}`)
        }
        return this
    }

    minLength(size: number) {
        let value = this.data[this.id]
        if(!checkMinLength(value, size)) {
            this.error(this.id, `${this.elem} must be atleast ${size} of length`)
        }
        return this
    }

    maxLength(size: number) {
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
            this.error(this.id, `${this.elem} is not a valid email format`)
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

    file() {
        let file = this.data[this.id]
        if (!checkFile(file)) {
            this.error(this.id, `${this.elem} is not a valid file`)
        }
        return this
    }

    maxSize(size: number) {
        let file = this.data[this.id]

        if(!checkMaxFileSize(file, size)) {
            this.error(this.id, `${this.elem} is greater too large`)
        }

        return this
    }

    allowedTypes(types: string[]) {
        let file = this.data[this.id]

        if(!checkFileTypes(file, types)) {
            this.error(this.id, `${this.elem} is not a valid file type`)
        }

        return this
    }

    pattern(pat: any) {
        let value = this.data[this.id]
        if(!checkCustomPattern(value, pat)) {
            this.error(this.id, `${this.elem} is not matched with pattern`)
        }
        return this
    }

    equals(val: any) {
        let value = this.data[this.id]
        if(!checkEqual(value, val)) {
            this.error(this.id, `${this.elem} is not equal to the value`)
        }
        return this
    }

    extend(func: Function) {
        let value = this.data[this.id]
        if(!func(value)) {
            this.error(this.id, `${this.elem} is not a valid value`)
        }
        return this
    }

    error(id: string, value: any) {
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