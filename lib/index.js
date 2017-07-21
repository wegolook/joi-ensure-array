'use strict';

module.exports = (Joi) => ({
    name: 'array',
    base: Joi.array(),
    coerce(value, state, options) {
        if (options.convert && this._flags.ensure) {
            return Array.isArray(value) ? value : [value];
        }

        return value;
    },
    rules: [
        {
            name: 'ensure',
            setup(params) {
                this._flags.ensure = true;
            }
        }
    ]
});
