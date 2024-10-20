document.getElementById('donationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const yourName = document.getElementById('yourName').value.trim();
    const yourAddress = document.getElementById('yourAddress').value.trim();
    const yourEmail = document.getElementById('yourEmail').value.trim();
    const yourTelephone = document.getElementById('yourTelephone').value.trim();
    const amount = document.querySelector('input[name="amount"]:checked');

    if (!/^[a-zA-Z\s]+$/.test(yourName)) {
        alert('Your name must contain only letters.');
        return; 
    }
    if (yourAddress.split(',').length !== 2) {
        alert('Enter valid format for address: city,state');
        return;
    }
    if (!yourEmail.includes('@') || !yourEmail.includes('.')) {
        alert('Enter valid email format.');
        return; 
    }
    if (!/^[0-9]*$/.test(yourTelephone)) {
        alert('Enter valid telephone number.');
        return; 
    }
    if (!amount) {
        alert('Please choose an amount to donate.');
        return; 
    }

    this.submit();
});
