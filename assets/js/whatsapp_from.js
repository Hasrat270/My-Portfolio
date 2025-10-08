function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    // const fullMessage = `New Contact Form Submission*%0A%0A*Name: ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const fullMessage = `NEW FORM SUBMISSION%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;



    // Replace with your WhatsApp number with country code (no +)
    const phoneNumber = "+923082841437"; 

    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
  }
