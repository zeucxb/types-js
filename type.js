const defaultTypes = require('./defaultTypes');

class Type {
  constructor(types) {
    this.types = types || {};
  }
  
  validate(typeName, value) {
    if (!this.types.hasOwnProperty(typeName)) {
      throw new Error(`Invalid type => ${typeName} its not registred!`);  
    }
    
    const objectValue = this.types[typeName](value, this);
    
    if (objectValue.valid) {
      return objectValue.value;
    } else {
      throw new Error(`Invalid value => ${value} is not a ${typeName}!`);
    }
  }
  
  create(typeName, typeFunction) {
    this.types[typeName] = typeFunction;
  }
}

module.exports = new Type(defaultTypes);