document.querySelector('form').addEventListener('submit', function (event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernamePattern = /^[A-Za-z]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[*$@]).+$/;

    if (!usernamePattern.test(username)) {
        alert('Enter valid format for username: only letters are allowed.');
        event.preventDefault(); 
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('Enter valid format for password: letters, at least one number, and one special character (*, $ or @) are required.');
        event.preventDefault(); 
        return;
    }
});
