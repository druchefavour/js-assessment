exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var timeWasted = $.Deferred();
  	setTimeout(function() {
  		timeWasted.resolve(value);
  	}, 10);
  	return timeWasted.promise();
  },

  manipulateRemoteData: function(url) {
  	var timeWasted = $.Deferred();
  	$.ajax(url).then(function(resp){
  		var people = $.map(resp.people, function (person) {
  			return person.name;
  		})
  		timeWasted.resolve(people.sort());
  	});
  	return timeWasted.promise();

  }
};
