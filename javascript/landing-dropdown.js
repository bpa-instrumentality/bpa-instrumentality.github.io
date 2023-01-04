let session = localStorage.getItem('session')
document.getElementById('loggedin').style.display = "none";
let dropdown = document.getElementById('dropdown')

const isHover = e => e.parentElement.querySelector(':hover') === e;

if (session) {
    document.getElementById('loginsignup').style.display = "none";
    document.getElementById('loggedin').style.display = "flex";
    console.log(document.getElementById('loggedin'))
    let email = JSON.parse(session).email;
    document.getElementById('email').textContent = email;
}

function showDropdown() {
    dropdown.style.top = "100%";
    dropdown.style.opacity = "1";
}

function hideDropdown() {
    if (!(isHover(dropdown))) {
        dropdown.style.top = "80%";
        dropdown.style.opacity = "0";
    }
    console.log(isHover(dropdown))
}