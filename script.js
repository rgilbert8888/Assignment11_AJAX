//TODO: create an option list of users
// on dropdown change, get all paintings for a user
// when the paintings are loaded, list all of the urls with the name

$(document).ready(function(){

///Define Button Clicks below

	$('#btnCreateUser').on('click', function(){
		var user = {
			fname: $('#create .fname').val(),
			lname: $('#create .lname').val(),
			password: $('#create .password').val(),
			email: $('#create .email').val()
		};
		createUser(user);
	});

	$('#btnLoginUser').on('click', function(){
		var login = {
			email: $('#login .email').val(),
		password: $('#login .password').val()
		};
		loginUser(login);
	});

	$('#btnLoadPainting').on('click',function(){
		listPaintings($('.userId').val());	//load for user
		//TODO: change to load for current user
	});

///Define Events below (these map to triggers in the art-share API wrapper)

	$(document).on('userCreated', function(e, user){
		console.log('user', user);
		$('#create')[0].reset();

		$('#login .email').val(user.email);
		$('#login .password').focus();
	});

	$(document).on('userLoggedIn', function(e, user){
		//do stuff with the user like load paintings

	});

	$(document).on('paintingsLoaded', function(e, paintings){
		//do stuff with the paintings
		//console.log('paintings', paintings.data);
		var firstPainting = paintings.data[0];
		var url = firstPainting.image_url;
		$('#painting-holder').html('<img src="' + url + '" class="im-new" />');
	});
});