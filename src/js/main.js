//validate form 
$(document).ready(function(){
  $('.form').submit(function(event) {
      var name = $('input[name="name"]').val();
      var email = $('input[name="email"]').val();
      var message = $('input[name="message"]').val();
      var isValid = true;

      // Валідація імені
      if (!name.trim()) {
          isValid = false;
          $('input[name="name"]').next('.error').text('Please enter your name');
      } else {
          $('input[name="name"]').next('.error').text('');
      }

      // Валідація email
      if (!email.trim() || !isValidEmail(email)) {
          isValid = false;
          $('input[name="email"]').next('.error').text('Please enter a valid email address');
      } else {
          $('input[name="email"]').next('.error').text('');
      }

      // Валідація повідомлення
      if (!message.trim()) {
          isValid = false;
          $('input[name="message"]').next('.error').text('Please enter your message');
      } else {
          $('input[name="message"]').next('.error').text('');
      }

      if (!isValid) {
          event.preventDefault();
      }
  });
});










