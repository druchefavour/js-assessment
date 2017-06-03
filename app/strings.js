exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
	reduceString: function(str, amount) {
		// Declare two variables: count and result
		var count = 0;
		var result = " " // An empty String
		// loop across the and count all the strings
		for (var i = 0; i < str.length; i++) {
			if (str[i] === str[i+1]) {

				count ++;
				} else if (count < amount) {
					result += str[i];
				} else {

					count = 0;
					result +=[ str[i]];
				}
			};
			return result;
		}
     }
	
function worrdWrap (str, cols) {
  	// Declare a variable that wraps the string and assign an empt string to it
  	var wrappedString = ' ', 
  	// Define an empty array
  	arrayOfWords = [];

  	//Use the split method to define each string element

  	arrayOfWords = str.split(' ');

  	// Assign the first word in the array to wrappedString

  	wrappedString = arrayOfWords [0]; 
  	// loop over the array of  words and select the wrapped words

  	for (var i =1; i < arrayOfWords.length; i++) {
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

console.log(wrappedString);

  }

function reverseString(str) {
	//Use the split() method to return a new array
	var splitString = str.split( ' '); //var splitString = "uche".split("");
    // ["e", "h", "c", "u"]

    // Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["u", "c", "h", "e"].reverse();// Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    
    // Return the reversed string
   
    return joinArray; 
  
}

reverseString("uche");
