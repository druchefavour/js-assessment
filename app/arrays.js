exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // loop through the entire array and return the number it is equivalent to the  position of the number in the aray

    for (var i =0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    } 
   return -1;
  },

  sum: function(arr) {
    // Declare a variable that will add all the items in an array
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;

  },

  //================================================

  // Removing an item from an array

  remove: function(arr, item) {

    var itemToRemove

    // loop over the array and use the splice method to select the item to remove
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        itemToRemove = arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  // ==============================================

 
  // Remove an item from an array and return the original array

 removeWithoutCopy: function (arr, item) {
 // function removeWithoutCopy (arr, item)
    // declare a constructor - say newArr

    var newArr = new Array();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        itemToRemove = arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  // ===========================================================

  // Append an item to the end of an array

  append: function(arr, item) {

    // Use the push method to push an item to the end of the array
    arr.push(item);
    return arr;
  },

  // Truncate an array using the splice method

  truncate: function(arr) {

     arr.splice(arr.length-1, 1);
      return arr;
  },

  prepend: function(arr, item) {
    // Use the unshift method to add an item to the begining of the array

    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {

    // Use the shift method to remove first item from array. Returns removed element
       arr.shift();
       return arr;
  },

  concat: function(arr1, arr2) {

    // Using the concat method Returns new array with all items from arrays arr1 and arr2
    var arr3 = [];

    arr3 = arr1.concat(arr2); 
    return arr3;
  },

  insert: function(arr, item, index) {

    // Use the splice method to insert an item to an array at given index.
     arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
    //Returns number of occurrences of item in array
     var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr [i] === item) {
          count++;
        }
      }
      return count;
  },

  duplicates: function(arr) {
    // Returns array of all dupplicates in arrray. Order is irrelevant.
    // Declare an empty array variable

    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr.lastIndexOf (arr[i]) !== i && duplicates.indexOf(arr[i]) === -1) {
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {

    // Returns array where each element is the power of 2 of every element from array.

     return arr.map(function(item) {
        return Math.pow(item, 2);
      });
  },

  findAllOccurrences: function(arr, target) {

    // Returns array of indexes under which target is found in array
    var occurences = [], index = arr.indexOf(target);
    while (index !== -1) {
      occurences.push(index);
      index = arr.indexOf(target, index+1);
    }
    return occurences;
  }
}