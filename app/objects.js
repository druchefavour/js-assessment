exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    // declare a variable 'array' and assign an empty array bto it
    var array = [];

    for (var a in obj) {
      if (obj.hasOwnProperty (a)) {
        array.push(a + ': ' + obj[a]);
      }
    }
    return array;

  }
};