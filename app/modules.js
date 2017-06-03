exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    return {
      str1: str1,
      str2: str2,

     answer:function answer () {
        return this. str1 + ', ' + this. str2;
      } 

    }

  }
};