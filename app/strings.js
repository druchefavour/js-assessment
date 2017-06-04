exports = typeof window === 'undefined' ? global : window;
exports.stringsAnswers = {
	reduceString: function(str, amount) {
		// Declare all the required variables: count and result
		var count = 0;
		var result = ''; // An empty String
		var strArray = []; // An empty Array
		var string = str.split(''); //Split str into an array of substrings
		string.forEach(function(val) {
			if (val != result) {
				result = val;
				count = 1;
				strArray.push(val);
			} else if (count < amount) {
				count++;
				strArray.push(val);
			}
		});
		return strArray.join(''); //Used the join method to join the elements of an array into a newStr
     },

      wordWrap: function (str, cols) {
      	var string = str.split('');
      	var i = cols;

      	function checkMore() {
      		for (i; i < string.length; i++) {
      			if (string[i] === ' ') {
      				string[i] = '\n';
      				i += cols;
      				 return;
      			}
      		}
      	}
      	function checkLess() {
      		for (i; i > 0; i--) {
      			if (string[i] === ' ') {
      				string[i] = '\n';
      				i += cols;
      				return;
      			}
      		}

      		checkMore();

      	}
      	while (i < string.length) {
      		if (string.indexOf(' ') < 0) {
      			 return string.join('')
      		}
      		 checkLess();
      	}

      	return string.join('')

      },


     reverseString: function (str) {
     //Declare a string as a variable
     var splitString = '';
     for (var i = str.length -1; i >= 0; i--) {
     	splitString += str[i];
     }
      return splitString; 
 }

};

