exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2])
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(anotherStr) {
      return str + ', ' + anotherStr;
    }
  },

  makeClosures: function(arr, fn) {
    // Declare an empty array and a helper function
    var array = [];
    var helper = function (val) {
      return function () {
        return fn(val);
      };
    };
    // loop across the arr

    for (var i = 0; i < arr.length; i++) {
      //array[i] = helper [i];
      array.push(helper(arr[i]));
      }
      
      return array; 
  },

  partial: function(fn, str1, str2) {

     return function(str3) {
        return fn(str1, str2, str3);
      }
  },

  useArguments: function() {

     return Array.prototype.slice.call(arguments).reduce(function(a, b) {
        return a + b;
      });
  },

  callIt: function(fn) {

    var arguments = Array.prototype.slice.call(arguments);
      var fn = arguments[0];
      arguments.shift();
      return fn.apply(this, arguments);
  },

  partialUsingArguments: function(fn) {

    var args1 = Array.prototype.slice.call(arguments);
    var fn = args1[0];
    args1.shift();
    return function() {
      var args2 = Array.prototype.slice.call(arguments);
      return fn.apply(this, args1.concat(args2));
    };
},

curryIt: function(fn) {

  function applyArgs (_fn, args) {
    return _fn.apply(null, args);
  }

  function getExisArgs (exisArgs, expArgsCount ) {
     return function (currArgs){

      exisArgs.push(currArgs);

    var totalArgsAvail = exisArgs.length === expArgsCount;

    if (totalArgsAvail) {
      return applyArgs (fn, exisArgs);
    }
    return getExisArgs (exisArgs, expArgsCount);
  };
}
return getExisArgs([], fn.length);
  }
 };