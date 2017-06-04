exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
	reduceString: function(str, amount) {
		// Declare all the required variables: count and result
		var count = 0;
		var result = ''; // An empty String
		var strArray = []; // An empty Array
		var string = str.split(''); //Split str into an array of substrings

		// loop across the and count all the strings
		//for (var i = 0; i < str.length; i++) {
		//	if (str[i] === str[i+1]) {

		//		count ++;
		//		} else if (count < amount) {
		//			result += str[i];
		//		}

		//		} else {

		//			count = 0;
		//			result += str[i];
		//		}
		//	};
			return strArray.join(''); //Used to join the elements of an array into a newStr
     },
	
function wordWrap (str, cols) {
  	// Declare a variable that wraps the string and assign an empty string to it
  	var wrappedString = '', 
  	// Define an empty array
  	arrayOfWords = [];

  	//Use the split method to define each string element

  	arrayOfWords = str.split('');

  	// Assign the first word in the array to wrappedString

  	wrappedString = arrayOfWords [0]; 
  	// loop over the array of  words and select the wrapped words

  	for (var i = 1; i < arrayOfWords.length; i++) {
  		if (arrayOfWords[i].length > cols) {
	        wordWrap += '\n' + arrayOfWords[i];
	    } else {

	    	if (wordWrap.length + arrayOfWords[i].length > cols) {
	    		wordWrap += '\n' +arrayOfWords[I];
	    		} else {
	    			wordWrap += ' ' + arrayOfWords[i];
	    		}
	    }
}  

return (wrappedString);

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

