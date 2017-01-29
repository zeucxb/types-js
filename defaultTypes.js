const dafaultTypes = {
  number: (value) => {
    return {
      valid: !isNaN(value),
      value,
    };
  },
  odd: (_value, opts) => {
    const value = opts.validate('number', _value)
    
    return {
      valid: 0 < (value % 2),
      value,
    };
  }
};

module.exports = dafaultTypes;