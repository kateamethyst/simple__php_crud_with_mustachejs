$(function(){

	$.ajax({
		type:'GET',
		url:'../Jobs/ViewContact.php',
		success: function(contacts){
			var data = $.parseJSON(contacts);
			$(data).each(function(i,val){
				$('#content').append("<div id='"+ val.id + "'>");
				$.each(val, function(k,v){
					$('#' + val.id).append("<h4>" + k + ":" + v + "</h4>")
				});
				$('#' + val.id).append("<button id='edit-contact' class='btn btn-primary'>Edit</button></div>");
			});
		},
		error:function(){
			console.log('error loading contacts')
		}
	});


	$('#add-form').submit(function(event){
		event.preventDefault();
		var contacts = {
			'name' : $('#name').val(),
			'number' : $('#number').val(),
			'email' : $('#email').val(),
		};


		$.ajax({
			type:'POST',
			url:'../Jobs/AddContact.php',
			data: contacts,
			encode: 'json',
			success: function(data) {
				location.href = 'http://localhost/activity/app/views/index.html'
			},
			error: function(){
				console.log('error adding new contact');
			}
		
		});

	});

	$('#edit-contact').click(function(event){
		$()		
	});


});