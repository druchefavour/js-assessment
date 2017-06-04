exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    return {
      name: str1, 
      salutation: str2,

     answer:function () {
        return "" + this.name + ', ' + 'angus';
      } 

    }

  }
};