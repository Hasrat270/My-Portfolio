$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Please enter a subject",
                    minlength: "Your subject must consist of at least 4 characters"
                },
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address"
                },
                message: {
                    required: "Please enter your message",
                    minlength: "Your message must be at least 10 characters long"
                }
            },
            submitHandler: function(form) {
                // Get form values
                var name = $('#name').val();
                var email = $('#email').val();
                var subject = $('#subject').val();
                var message = $('#message').val();
                
                // Format message for WhatsApp
                var whatsappMessage = `*New Contact Form Submission*\n\n` +
                    `*Name:* ${name}\n` +
                    `*Email:* ${email}\n` +
                    `*Subject:* ${subject}\n\n` +
                    `*Message:*\n${message}`;
                
                // Encode message for URL
                var encodedMessage = encodeURIComponent(whatsappMessage);
                
                // WhatsApp number (from index.html)
                var whatsappNumber = '923082841437';
                
                // Create WhatsApp URL
                var whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                
                // Open WhatsApp in same window (reuses existing WhatsApp window if already open)
                var whatsappWindow = window.open(whatsappUrl, 'whatsappWindow');
                
                // If window was blocked or closed, try opening in new tab
                if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
                    window.open(whatsappUrl, '_blank');
                } else {
                    // Focus the existing window
                    whatsappWindow.focus();
                }
                
                // Show success message
                $('#contactForm :input').attr('disabled', 'disabled');
                $('#contactForm').fadeTo("slow", 1, function() {
                    $(this).find(':input').attr('disabled', 'disabled');
                    $(this).find('label').css('cursor','default');
                    $('#success').fadeIn();
                    $('.modal').modal('hide');
                    $('#success').modal('show');
                    
                    // Reset form after 3 seconds
                    setTimeout(function() {
                        $('#contactForm')[0].reset();
                        $('#contactForm :input').attr('disabled', false);
                        $('#success').modal('hide');
                    }, 3000);
                });
                
                // Prevent default form submission
                return false;
            }
        })
    })
        
 })(jQuery)
})