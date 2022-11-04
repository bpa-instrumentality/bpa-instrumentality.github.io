let currView = 0;

function toggleView() {
    currView += 1;
    let btn = document.getElementById('btn');
    let toph3 = document.getElementById('toph3');
    let midp = document.getElementById('midp');
    let mida = document.getElementById('mida');
    if (currView%2 == 0){
        btn.textContent = "Login";
        toph3.textContent = "Login To";
        midp.textContent = "Don't have an account?";
        mida.textContent = " Sign up";
    }
    else {
        btn.textContent = "Signup";
        toph3.textContent = "Signup To";
        midp.textContent = "Already have an account?";
        mida.textContent = " Log in";
    }
}