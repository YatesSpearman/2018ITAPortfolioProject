var firstName, email, phoneNumber, submit;



inputChecker = function() {
    firstName = document.getElementById('name').value;
    
    email = document.getElementById('email').value;

    phoneNumber = document.getElementById('phone-number').value;

    if(firstName.length < 1) {
        alert('Please Insert A Name');
        return false;
    }

    if(email.length < 1) {
        alert('Please Insert Your Email Address');
        return false;
    }

    if(phoneNumber.length < 1) {
        alert('Please Insert Your Phone Number');
        return false;
    }
};

document.getElementById('submit').addEventListener('click', inputChecker);


