var createUser = function(user){
	$.ajax({
		type: "POST",
		url: "http://art-share.herokuapp.com/api/v1/users/",
		data: {
			user: user
		}
	}).success(function(data){
		console.log("successful user creation", data.result.email);
		$(document).trigger('userCreated', data.result);
	});
};


// return all users
var returnUsers = function(){
	$.ajax({
		type: "GET",
		url: "http://art-share.herokuapp.com/api/v1/users/"
	}).success(function(data){
		var users = data.result;
		for (var i = 0; i < users.length; i++){
			$('#users').append('<li>' + users[i].email+ '</li>');
		}
	}).error(function(error){
		console.log('error msg: ', error);
	});
};

// note: this user has an ID of 10

var loginUser = function(data){
	$.ajax({
		type: "POST",
		url: "http://art-share.herokuapp.com/api/v1/sessions/new",
		data: data
	}).success(function(data){
		console.log("successful user login", data.result.email);
		$(document).trigger('userLoggedIn', data.result);
	});
};


// Get currently Logged in user
//this doesn't work
// var getCurrentUser = function(){
// 	$.ajax({
// 		type: "GET",
// 		url: "http://art-share.herokuapp.com/api/v1/sessions/"
// 	}).success(function(response){
// 		console.log('success: ', response);
// 	});	
// };

// List all paintings for a user (user 10)
var listPaintings = function(userId){
	$.ajax({
		type: "GET",
		url: "http://art-share.herokuapp.com/api/v1/users/" + userId + "/paintings/"
	}).success(function(data){
		console.log('paintings', data.result.length);
		$(document).trigger('paintingsLoaded', { 
			data: data.result
		});
	});
};

// Delete a users painting
var deletePainting = function(){
	$.ajax({
		type: "DELETE",
		url: "http://art-share.herokuapp.com/api/v1/users/10/paintings/7"
	}).success(function(response){
		console.log('Deleted a painting: ', response)
	})
}