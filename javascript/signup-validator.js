const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const passError2 = document.getElementById('passError2');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const passConfirm = document.getElementById('passConfirm');
const submitBtn = document.getElementById('submitBtn');
const loader = document.getElementById('loader');
const submitTxt = document.getElementById('submitTxt');
const showPass = document.getElementById('showPass');
const hidePass = document.getElementById('hidePass');

hidePass.style.display = "none";

function validateSignup() {
    if (emailInput.value.trim() == ""){
        emailError.style.opacity = "1";
    }
    if (passInput.value.trim() == ""){
        passError.style.opacity = "1";
    }
    if (!(passInput.value == passConfirm.value)) {
        passError2.style.opacity = "1";
    }

    if (!(emailInput.value.trim() == "")) {
        if (!(passInput.value.trim() == "")) {
            if (passInput.value == passConfirm.value) {
                submitTxt.textContent = "";
                loader.style.display = "block";

                setTimeout(() => {
                    submitTxt.textContent = "Success!";
                    loader.style.display = "none";
                    submitBtn.style.background = "#009687";
                    submitBtn.style.transition = "background 1s"

                    setTimeout(() => {
                        window.location.replace('./index.html')
                    }, 1500)

                }, Math.floor(Math.random() * 500) + 1500)

            }
        }
    }

}

emailInput.addEventListener('input',function(e){
    emailError.style.opacity = "0";
});
passInput.addEventListener('input',function(e){
    passError.style.opacity = "0";
});
passConfirm.addEventListener('input',function(e){
    passError2.style.opacity = "0";
});

showPass.addEventListener("click", function(){
     showPass.style.display = "none";
     hidePass.style.display = "flex";
     passConfirm.type = "text";
});

hidePass.addEventListener("click", function(){
    hidePass.style.display = "none";
    showPass.style.display = "flex";
    passConfirm.type = "password";
});

submitBtn.addEventListener("submit", (event) => {
    event.preventDefault();
  })