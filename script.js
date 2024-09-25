document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you for contacting us, ${name}! We will get back to you shortly.`);
    
    // Optionally, reset the form
    this.reset();
});
