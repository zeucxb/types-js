const dafaultTypes = {
  number: value => ({
    valid: !isNaN(value),
    value,
  }),
  odd: (_value, opts) => {
    const value = opts.validate('number', _value);

    return {
      valid: (value % 2) > 0,
      value,
    };
  },
};

module.exports = dafaultTypes;