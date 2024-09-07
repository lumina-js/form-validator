export declare function isRequired(value: any): boolean;
export declare function checkMinValue(value: number, size: number): boolean;
export declare function checkMaxValue(value: number, size: number): boolean;
export declare function checkMinLength(value: any, size: number): boolean;
export declare function checkMaxLength(value: any, size: number): boolean;
export declare function checkUrl(value: string): boolean;
export declare function checkEmail(value: string): boolean;
/**
 * ? 1. Atleast one uppercase letter.
 * ? 2. Atleast one number.
 * ? 3. Atleast one lowercase letter.
 * ? 4. Atleast one special character.
 * ? 5. Atleat eight characters length.
 */
export declare function checkPassword(value: string): boolean;
export declare function checkCustomPattern(value: any, pattern: any): boolean;
export declare function checkEqual(value1: any, value2: any): boolean;
export declare function checkInteger(value: any): boolean;
export declare function checkString(value: any): boolean;
