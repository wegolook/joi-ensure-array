# @wegolook/joi-ensure-array

[Joi](https://github.com/hapijs/joi) extension to support array().ensure()

## Usage

```javascript
// import and assignment
const Joi = require('joi'); // use version ^9.0.0
const joiEnsureArray = require('@wegolook/joi-ensure-array');
const myJoi = Joi.extend(joiEnsureArray);

// ...then
const result = myJoi.array().ensure().validate('value');
// => {err: null, value: ['value']}

// ...or
myJoi.array().ensure().validate(value, (err, value) => { /*...*/ });
```

## CI Status

[![Codeship Status for wegolook/joi-ensure-array](https://app.codeship.com/projects/8c54b410-504a-0135-4e7e-22cf59b48ba2/status?branch=master)](https://app.codeship.com/projects/234293)
