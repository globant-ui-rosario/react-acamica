import React from 'react';

TaskItem.propTypes = {
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol,

  optionalNode: React.PropTypes.node,

  optionalElement: React.PropTypes.element,

  optionalMessage: React.PropTypes.instanceOf(Message),

  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ]),

  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

  optionalObjectWithShape: React.PropTypes.shape({
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
  }),

  requiredFunc: React.PropTypes.func.isRequired,

  requiredAny: React.PropTypes.any.isRequired,

  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
