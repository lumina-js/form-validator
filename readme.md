## Form Validator

### Installation

It can be installed using npm. Install it using

```
npm install lumina-form-validator
```

Once installed, you can add index.js directly from node_modules/favjs folder.

```html
<script src="node_modules/favjs/index.js"></script>
```

or

You can import the module using ES6

```js
import { Validator } from 'lumina-form-validator'
```

### Usage

```js
import { Validator } from 'lumina-form-validator'

const validator = new Validator({
        name: '',
        age: '18',
        email: 'naruto',
        phone: '9848022338'
    })

validator.attr('name').label('Name').required()
validator.attr('age').label('Age').required().integer()
validator.attr('email').label('Email').required().email()
validator.attr('phone').label('Phone Number').extend((value) => {
    return typeof(value) === 'string'
})

if(validator.isSuccess()) {
    return 'Validation success'
} else {
    return validator.getErrors()
}
```

**Example :**

Errors will be returned as below from `getErrors()` method :

```js
{
    email: 'Email is not a valid email format',
    name: 'Name is required',
    age: 'Age is not a valid integer'
}
```

#### Validator methods :

|Method|Description|
|-|-|
|attr()|Used to get attribute from the given object.|
|name()|Set the proper user friendly name for the attribute field.|
|required()|Check if the value is present|
|integer()|Check if the value is proper integer|
|string()|Check if the value is proper string|
|minValue(size)|Check if the integer is below the given size.|
|maxValue(size)|Check if the integer is above the given size.|
|minLength(size)|Check if array or string contains minimum number of items.|
|maxLength(size)|Check if array or sring exceeds maximum number of items.|
|url()|Check if the value is a valid URL.|
|email()|Check if the value is a valid email.|
|password()|Check if the value is a valid password.|
|pattern(format)|Check if the value is matching with the custom pattern given.|
|equals(val)|Check if the value is equal to the given value.|
|extend(function)|To extend validator to add your own validation.|
|isSuccess()|Check if the validation is success of not. Returns boolean value.|
|getErrors()|Get the errors as object if validation fails.|

#### Password format :

1. Atleast one uppercase letter.
2. Atleast one number.
3. Atleast one lowercase letter.
4. Atleast one special character.
5. Atleat eight characters length.

### Utils 

Lumina form validator provides util methods for each type of validation. You can just import them and use them instead of Validator.

#### Usage

```js
import {  
    isRequired, 
    checkEmail,
} from "../index";

if(isRequired('Naruto')) {
    return 'Valid'
} else {
    return 'Invalid'
}
```

#### Methods

|Method|Description|
|-|-|
|isRequired(value)|Check if the value exists and valid.|
|checkMinValue(value, size)|Check if the integer value is less than the size.|
|checkMaxValue(value, size)|Check if the integer value is greater than the size.|
|checkMinLength(value, size)|Check if array or string is minimum length of size.|
|checkMaxLength(value, size)|Check if array or string is maximum length of size.|
|checkUrl(value)|Check if value is a valid URL.|
|checkEmail(value)|Check if value is a valid email.|
|checkPassword(value)|Check if value is a valid password.|
|checkCustomPattern(value, pattern)|Check if value matches with the pattern.|
|checkEqual(value1, value2)|Check if value1 and value2 are equal.|
|checkInteger(value)|Check if value is a valid integer.|
|checkString(value)|Check if value is a valid string.|

Alright, happy coding :)