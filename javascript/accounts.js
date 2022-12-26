if (!localStorage.getItem('users')) {
    usersData = {
        "usersData": []
    }
    localStorage.setItem('users', JSON.stringify(usersData));
}

let currFile = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
console.log(!(currFile == "indexy.html"));

if ((currFile == "dashboard.html") || (currFile == "dashboard.html")){
    if (!localStorage.getItem('session')) {
        window.location.replace('./login.html')
    }
}

// if ((currFile == "login.html") || (currFile = "signup.html")) {
//     if (localStorage.getItem('session')) {
//         window.location.replace('./dashboard.html')
//     }
// }