$(function(){

  var $contacts   = $('#contacts');
  var $name       = $('#name');
  var $number     = $('#number');
  var $email      = $('#email');

  var contactTemplate = $('#contact-template').html();

  function addContact(value){
    $contacts.append(Mustache.render(contactTemplate, value));
  }

  $('#body').show(function(){
    $.ajax({
      type:'GET',
      url:'../Jobs/ViewContact.php',
      success:function(data){
        var jsonData = $.parseJSON(data);
        $(jsonData).each(function(key, value){
          addContact(value);
        });
      },
      error:function(data){
        console.log('Error');
      }
    });
  });

  $('#add-form').on('submit', function(event){
    event.preventDefault();
    var data = {
      'name'      : $name.val(),
      'number'    : $number.val(),
      'email'     : $email.val(),
    };

    $.ajax({
      type: 'POST',
      url:'../Jobs/AddContact.php',
      data: data,
      encode: 'json',
      success: function(){
        location.href = 'http://localhost/activity/app/views/index.html';
      },
      error: function(){
        console.log('Error')
      }
    });
  });

  $contacts.delegate('.remove', 'click', function(){

    var $id = $(this).attr('data-id');
    var $li = $(this).closest('li');
    var self = this;

    $.ajax({
      type:'DELETE',
      url:'../Jobs/DeleteContact.php?id=' + $id,
      success: function(){
        $li.fadeOut(500, function(){
          $(this).remove();
        });
      },
      error: function(){
        console.log('Error');
      }
    });
  });

  $contacts.delegate('.editContact', 'click', function(){
    var $li = $(this).closest('li');
    $li.find('input.name').val($li.find('span.name').html());
    $li.find('input.number').val($li.find('span.number').html());
    $li.find('input.email').val($li.find('span.email').html());
    $li.addClass('edit');
  });

  $contacts.delegate('.cancelEdit', 'click', function(){
    $(this).closest('li').removeClass('edit');
  });

  $contacts.delegate('.saveEdit', 'click', function(){
    var $li = $(this).closest('li');
    var data = {
      'name'    : $li.find('input.name').val(),
      'number'  : $li.find('input.number').val(),
      'email'   : $li.find('input.email').val(),
    }

    $.ajax({
      type: 'POST',
      url:'../Jobs/UpdateContact.php?id=' + $li.attr('data-id'),
      data: data,
      encode: 'json',
      success: function(){
        $li.find('span.name').html(data.name);
        $li.find('span.number').html(data.number);
        $li.find('span.email').html(data.email);
        $li.removeClass('edit');
      },
      error: function(){
        console.log('Error');
      }
    });
  });

});