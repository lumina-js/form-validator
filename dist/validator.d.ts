import { IValidatorData, IValidatorErrors } from "./types/validatorTypes";
export default class Validator {
    errors: IValidatorErrors;
    id: any;
    elem: any;
    data: IValidatorData;
    constructor(data: IValidatorData);
    attr(elem: string): this;
    label(elem: string): this;
    required(): this;
    integer(): this;
    string(): this;
    minValue(size: number): this;
    maxValue(size: number): this;
    minLength(size: number): this;
    maxLength(size: number): this;
    url(): this;
    email(): this;
    password(): this;
    pattern(pat: any): this;
    equals(val: any): this;
    extend(func: Function): this;
    error(id: string, value: any): void;
    getErrors(): IValidatorErrors;
    isSuccess(): boolean;
}
