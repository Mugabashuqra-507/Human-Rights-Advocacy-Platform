document.getElementById('volunteer-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|com\.in)$/;
    const messagePattern = /^[A-Za-z0-9\s]+$/;

    if (!namePattern.test(name)) {
        alert('Enter valid format for name: only letters are allowed.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Enter valid format for email: e.g., abc@gmail.com or abc@gmail.com.in');
        return;
    }

    if (!messagePattern.test(message)) {
        alert('Enter valid format for message: only text and numbers are allowed.');
        return;
    }

    location.reload(); 
});
