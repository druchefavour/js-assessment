exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    return {
    	answer:function () {
    		return this.salutation + ', ' + this.name;
    	},
    	salutation: str1,  
    	name: str2      
      }; 

    }
};