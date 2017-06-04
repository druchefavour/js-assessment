exports = exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    //declare variables required for recursion answers and assign empty arrays to them
    var fileList = [];
    var dirc = [];

    function processDir(dir) {
      // declare other variables 
      var j;
      var file;
      var files = dir.files;
      dirc.push(dir.dir);

      for (j = 0; j < files.length; j++) {
        file = files[j];
        if (typeof file === 'string') {
          if (!dirName || dirc.indexOf(dirName) > -1) {
            fileList.push(files[j]);
          }
        } else {
          processDir(files[j]);
        }
      }
      dirc.pop();
    }
    processDir(data);
  }

    return fileList;
  },

  permute: function(arr) {
    var tmpArray = [];
    var result = [];

    function logAnswer () {
      result.push (
        tmpArray.slice()
        // Use the slice method to make a copy of tmpArray so that we could still use tmpArray 
        );
    }
    function execute() {
      var j;
      var a;

      for (j = 0; j < arr.length; j++) {
        a = arr.splice(j, 1)[0];
        // This removes the item at index j

        tmpArray.push(a);
        // This adds that item to the array we are constructing

        if (arr.length) {
          // recurse over what's left if there is still anything in the array

          execute();
        } else {

          // otherwise, log the result
          logAnswer ();
        }
        arr.splice(j, 0, a);
        tmpArray.pop();

        // This restores the item we removed at index j and remove it from our temporary array
      }
      return result;
    }

    return execute();

  },

  fibonacci: function(n) {
    var emptyShift = "";
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
  }
}

validParentheses: function (n) {
  if (n === 0) {
    return [""];

    var result = [];
    for (var i = 0; i < n; i++) {
      var lefts = nPair(i);
      var rights = nPair(n - i - 1);

      for (var l = 0; l < lefts.length; l++)
        for (var r = 0; r < rights.length; r++)
          result.push("(" + lefts[l] + ")" + rights[r]);
  }
  return result;
};
