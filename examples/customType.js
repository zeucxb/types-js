const Type = require('../type');

Type.create('lessThanTen', (_value, opts) => {
  const value = opts.validate('number', _value);

  return {
    valid: value < 10,
    value,
  };
});

console.log(Type.validate('lessThanTen', 9));
console.log(Type.validate('lessThanTen', 10));