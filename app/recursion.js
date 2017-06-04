exports = exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    //declare variables required for recursion answers and assign empty arrays to them
    var fileList = [];
    var dirc = [];

    processDir(data);

    function processDir(dir) {
      // declare other variables 
      //var j;
      //var file;
      var files = dir.files;
      dirc.push(dir.dir);

      for (i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirc.indexOf(dirName) > -1) {
            fileList.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }
      dirc.pop();
    }

    //processDir(data);
 // }

    return fileList;
  },

  permute: function(arr) {
    var tmpArray = [];
    var result = [];

    return execute(arr);

    function execute(val) {
      var i;
      var itemOnList;

      for (i = 0; i < arr.length; i++) {
        itemOnList = arr.splice(i, 1)[0];
        // This removes the item at index j

        tmpArray.push(itemOnList);
        // This adds that item to the array we are constructing

        if (arr.length) {
          // recurse over what's left if there is still anything in the array

          execute(arr);
        } else {

          // otherwise, log the result
          logAnswer ();
        }
        arr.splice(i, 0, itemOnList);
        tmpArray.pop();

        // This restores the item we removed at index j and remove it from our temporary array
      }
      return result;
    }

    function logAnswer () {
      result.push (
        tmpArray.slice()
        // Use the slice method to make a copy of tmpArray so that we could still use tmpArray 
        );
    }

  },

  fibonacci: function(n) {
    function fib(n) {
      return n < 2 ? n : fib(n-1) + fib(n-2);
    }
    /*var emptyShift = "";
    var k;
    
    for (var j = 0; j < k; j++) {
      emptyShift += " ";
    }
    console.log(emptyShift + "fibonacci(" + n + ")");

    if (n < 2) {
      return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
        console.log(fibonacci(7));
    }
  }*/
  return fib(n);
},

validParentheses: function (n) {
  var setArray = [];
  var getParent = function (left, right, current) {
    if (left == 0 && right == 0) {
      setArray.push(current);
    }
    if (left > 0) {
      getParent(left-1, right-1, current + '(');
    }
    if (right > 0) {
      getParent(left, right-1, current + ')');
    }
    return setArray;
  };
  return getParent (n, 0, '');
}
};