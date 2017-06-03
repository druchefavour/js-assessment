
exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {

  count: function (start, end) {

    // Define a variable that will sets the maximum time allowed for the count  
    var timeAllowed;

    // Declare a function that counts the time within the specified time
    function myFunction() {
      console.log (startCount ++);

      if (startCount <= endCount) {

        // setTimeOut will execute my count cfunction (myfunction) once, after a second
        
        timeAllowed = setTimeout(myFunction, 1000);
      }
    }

        // Execute the function
        myFunction();
         return {

            cancel: function () {

                timeAllowed && clearTimeOut(timeAllowed);
            
      }

    };
  }
};