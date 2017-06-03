exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var timeWasted = $.Wasted();
  	setTimeOut(function() {
  		timeWasted.resolve(value);
  	}, 10);
  	return timeWasted.promise();
  },

  manipulateRemoteData: function(url) {
  	var timeWasted = $.Wasted();
  	$.ajax(url).then(function(resp){
  		var people = $.map(resp.people, function (person) {
  			return person.name;
  		})
  		timeWasted.resole(people.sort());
  	});
  	return timeWasted.promise();

  }
};
