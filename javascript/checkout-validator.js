function showError(item) {
    item.style.boxShadow = "0 0 0 2px #ff2727b7, 0 4px 4px 0 rgba(247, 85, 85, 0.3), 0 1px 1.5px 0  rgba(255, 86, 86, 0.2)"
}


function pay() {
    let err = 0;
    let inputs = document.querySelectorAll('input');
    if (document.getElementById('cn').value.trim().length < 19) {
        showError(document.getElementById('cn'))
        err += 1;
    }
    if (document.getElementById('cvc').value.trim().length < 3) {
        showError(document.getElementById('cvc'))
        err += 1;
    }
    inputs.forEach((input) => {
        console.log(input.value);
        if (input.value.trim() == "") {
            showError(input)
            err += 1;
        }
    })
    console.log(err)
    if (err == 0) {
        let is = `${email}Items`
        let ownedItems = JSON.parse(localStorage.getItem(is));
        let currCart = JSON.parse(localStorage.getItem(email))
        for (i in currCart) {
            ownedItems.push(currCart[i])
        }
        console.log(ownedItems)
        localStorage.removeItem(is);
        localStorage.setItem(is, JSON.stringify(ownedItems));
        let nc = []
        localStorage.removeItem(email);
        localStorage.setItem(email, JSON.stringify(nc))
        console.log(localStorage.getItem(email))
        document.querySelectorAll(".if").forEach((el) => {
            el.style.display = "none"
        })
        document.querySelectorAll(".col1").forEach((i) => {
            i.style.display = "none"
        })
        document.getElementById("sp").style.display = "flex";

        let mql = window.matchMedia('(max-width: 600px)');

        if (mql.matches) {
            document.body.style.height = "100%"
            document.body.style.padding = "1.5rem"
        }
    }
}

let inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('focus', () => {
inputs.forEach((i) => {
    i.style.boxShadow = "0 0 0 1px #e0e0e0, 0 4px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0  rgb(0 0 0 / 5%)"
})
    })
})