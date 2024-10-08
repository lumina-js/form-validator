import { 
    emailPattern, 
    urlPattern, 
    passwordPattern 
} from "./patterns"

export function isRequired(value: any) {
    if(value == "" || value == null || value == undefined) {
        return false
    }

    if (Array.isArray(value) && value.length === 0) {
        return false;
    }

    if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
        return false;
    }

    return true
}

export function checkMinValue(value: number, size: number) {
    if(value < size) {
        return false
    }
    return true
}

export function checkMaxValue(value: number, size: number) {
    if(value > size) {
        return false
    }
    return true
}

export function checkMinLength(value: any, size: number) {
    if(value.length < size) {
        return false
    }
    return true
}

export function checkMaxLength(value: any, size: number) {
    if(value.length > size) {
        return false
    }
    return true
}

export function checkUrl(value: string) {
    var regex = new RegExp(urlPattern)
    if(!regex.test(value)) {
        return false
    }
    return true
}

export function checkEmail(value: string) {
    var regex = new RegExp(emailPattern)
    if(!regex.test(value)) {
        return false
    }
    return true
}

/**
 * ? 1. Atleast one uppercase letter.
 * ? 2. Atleast one number.
 * ? 3. Atleast one lowercase letter.
 * ? 4. Atleast one special character.
 * ? 5. Atleat eight characters length.
 */
export function checkPassword(value: string) {
    var regex = new RegExp(passwordPattern)
    if(!regex.test(value)) {
        return false
    }
    return true
}

export function checkCustomPattern(value: any, pattern: any) {
    var regex = new RegExp(pattern)
    if(!regex.test(value))
    {
        return false
    }
    return true
}

export function checkEqual(value1: any, value2: any) {
    if(value1 !== value2) {
        return false
    }
    return true
}

export function checkInteger(value: any) {
    return Number.isInteger(value)
}

export function checkString(value: any) {
    return typeof value === 'string' && value.trim().length > 0;
}