let s = document.getElementById('s');


function closeToast() {
    s.classList.remove('show')
}

function openToast() {
    closeToast();
    s.classList.add('show')
    setTimeout(function(){ s.className = s.className.replace("show", ""); }, 3000);
}

// closeToast()
// openToast()

function showError(item) {
    item.style.boxShadow = "0 0 0 2px #ff2727b7, 0 4px 4px 0 rgba(247, 85, 85, 0.3), 0 1px 1.5px 0  rgba(255, 86, 86, 0.2)"
}


function contact() {
    let errors = 0
    let inputs = document.querySelectorAll('.input');
    inputs.forEach((input) => {
        if (input.value.trim() == "") {
            showError(input);
            errors += 1
        }
    })

    if (errors == 0) {
        inputs.forEach((input) => {
            input.value = ""
            openToast()
        })
    }
}


let inputs = document.querySelectorAll('.input');
inputs.forEach((input) => {
    input.addEventListener('focus', () => {
inputs.forEach((i) => {
    i.style.boxShadow = "0 0 0 1px #e0e0e0, 0 4px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0  rgb(0 0 0 / 5%)"
})
    })
})