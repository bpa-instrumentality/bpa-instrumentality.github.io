function resetErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach((error) => {
        error.classList.remove('active-error')
    })
}

function validate() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError1 = document.getElementById('emailerror1');
    let passError1 = document.getElementById('passerror1');
    let passError2 = document.getElementById('passerror2');
    let errors = 0
    // console.log(passError1);

    if (email.trim() == "") {
        emailError1.classList.add('active-error')
        errors += 1;
    }
    if (password.trim() == "") {
        passError1.classList.add('active-error')
        errors += 1;
    }

    if (errors == 0) {
        let users = JSON.parse(localStorage.getItem('users'))
        let usersData = users.usersData;
        let filter = usersData.filter(function(item){
            return item.email == email;         
        });
        if (!(filter.length > 0)) {
            passError2.classList.add('active-error')
            return
        }
        if (!(filter[0].password == password)) {
            console.log('incorrect')
            passError2.classList.add('active-error')
            return
        }
        let session = {
            "email": email,
            "password": password
        }
        localStorage.setItem('session', JSON.stringify(session))
        window.location.replace('./dashboard.html')
    }
}