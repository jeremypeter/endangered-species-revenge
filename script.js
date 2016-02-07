  var mailchimp = {
    init: function(){

      var $form = $('#mc-embedded-subscribe-form');
      var $subscribeBtn = $('.subscribe-button');
      var sent = false;
      var firstVisit;
      

      // alert(document.cookie)
      // alert(firstVisit)

      $form.form({
        fields: {
          email: {
            identifier: 'EMAIL',
            rules: [{
              type: 'empty',
              prompt: 'Please enter email address'
            }]
          },
          firstName: {
            identifier: 'FNAME',
            rules: [{
              type: 'empty',
              prompt: 'Please enter your first name'
            }]
          },
          lastName: {
            identifier: 'LNAME',
            rules: [{
              type: 'empty',
              prompt: 'Please enter your first name'
            }]
          }
        }
      });

      $form.submit(function(e){
        e.preventDefault();
        if(!sent){
          register($form);
        }
        sent = true;
      });

      $('#mc-embedded-subscribe').on('click', function(e) {
        e.preventDefault();
        if(!sent){
          register($form);
        }
        sent = true;
      });
    }
  };

  function register($form) {
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8"
    }).done(function(data){
      if(data.result === 'error'){

        $('.ui.error.message')
          .addClass('show')
          .append(data.msg);  
        return;
      }

      $('.contactUS').addClass('hide');
      $('.ui.success.message').removeClass('hide');
   
    }).fail(function(data){
      $('.ui.error').text('Could not connect to server. Please try again later');
    });
  }