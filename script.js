javascript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission (page reload)

        // Validate form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            messageDiv.textContent = 'Please fill out all fields.';
            return; // Stop the form submission
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            messageDiv.textContent = 'Invalid email address.';
            return;
        }


        // Simulate sending data to a backend (replace with your actual API call)
        // In a real application, you'd use fetch or XMLHttpRequest to send the data
        // to your server.  For example:
        // fetch('/api/contact', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     name: name,
        //     email: email,
        //     message: message
        //   })
        // })
        // .then(response => {
        //   if (response.ok) {
        //     messageDiv.textContent = 'Message sent successfully!';
        //     form.reset(); // Clear the form after successful submission
        //   } else {
        //     messageDiv.textContent = 'Error sending message. Please try again.';
        //   }
        // })
        // .catch(error => {
        //   console.error('Error:', error);
        //   messageDiv.textContent = 'Error sending message. Please try again.';
        // });


        // For testing purposes (without a backend), just display a success message
        messageDiv.textContent = 'Message sent successfully! (Backend not implemented)';
        form.reset(); // Clear the form after "submission"
    });
});