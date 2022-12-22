function resetErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach((error) => {
        error.classList.remove('active-error')
    })
}



function validate() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let emailError1 = document.getElementById('emailerror1');
    let emailError2 = document.getElementById('emailerror2');
    let passError1 = document.getElementById('passerror1');
    let passError2 = document.getElementById('passerror2');
    let errors = 0

    if (email.trim() == "") {
        emailError1.classList.add('active-error')
        errors += 1;
    }
    if ((password.trim() == "") || (confirmPassword.trim() == "")) {
        passError1.classList.add('active-error')
        errors += 1;
    }
    if (!(password == confirmPassword)) {
        passError2.classList.add('active-error')
        errors += 1;
    }
    if (errors == 0) {
        let users = JSON.parse(localStorage.getItem('users'))
        let usersData = users.usersData;
        let newUser = {
            "email": email,
            "password": password
        }
        usersData.push(newUser);
        localStorage.removeItem('users')
        let push = {
            "usersData": usersData
        }
        localStorage.setItem('users', JSON.stringify(push));
        let session = {
            "email": email,
            "password": password
        }
        localStorage.setItem('session', JSON.stringify(session))
        window.location.replace('./dashboard.html')
    }
}