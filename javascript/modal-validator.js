document.getElementById('error-modal').style.display = "none"


function modalSignup() {
    let inputs = document.querySelectorAll('.minput');
    let errors = 0
    inputs.forEach((input) => {
        if (input.value.trim() == "") {
            input.style.border = "2px solid red";
            errors += 1;
        }
    })

    if (errors == 0) {
        let password = document.getElementById('mpass').value;
        let email = document.getElementById('memail').value;

        console.log(password, email)



        let users = JSON.parse(localStorage.getItem('users'))
        let usersData = users.usersData;
        let filter = usersData.filter(function(item){
            return item.email == email;         
        });
        if (filter.length > 0) {
            document.getElementById('memail').style.border = "2px solid red";
            document.getElementById('error-modal').style.display = "block"
            errors += 1;
            return
        }
        let newUser = {
            "email": email,
            "password": password
        }
        usersData.push(newUser);
        localStorage.removeItem('users')
        let push = {
            "usersData": usersData
        }
        let session = {
            "email": email,
            "password": password
        }
        let newCart = []
        localStorage.setItem(`${email}`, JSON.stringify(newCart));
        localStorage.setItem(`${email}Items`, JSON.stringify(newCart));
        localStorage.setItem(`${email}Notifs`, JSON.stringify(newCart));
        localStorage.setItem('session', JSON.stringify(session))
        localStorage.setItem('users', JSON.stringify(push));
        window.location.reload()
    }
}


let inputs = document.querySelectorAll('.minput');
inputs.forEach((input) => {
    input.addEventListener('focus', () => {
inputs.forEach((i) => {
   i.style.border = "2px solid #CACACA";
   document.getElementById('error-modal').style.display = "none"
})
    })
})