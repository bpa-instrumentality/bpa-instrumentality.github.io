let session = JSON.parse(localStorage.getItem('session'))
let email = session.email;


let owned = JSON.parse(localStorage.getItem(`${email}Items`));
let notifs = JSON.parse(localStorage.getItem(`${email}Notifs`));
let results = document.getElementById("isr");
    console.log(owned)
    if (owned.length == 0) {
        results.textContent = "You have not rented any instruments."
        console.log('e')
        document.getElementById('billing-res').textContent = "You do not have any active billing cycles."
    }
let ns = document.getElementById("notifs-res");
console.log(notifs)
if (notifs.length == 0) {
    ns.textContent = "You do not have any instruments"
    // console.log('e')
}
for (i in owned) {
    let curr = owned[i];

    console.log(curr)
    let results = document.getElementById("isr");

    let irs = document.createElement("instrument-result-card");
    irs.setAttribute('title', curr.product)
    irs.setAttribute('hide-btn', "true")
    irs.setAttribute('cancel-btn', "true")
    irs.setAttribute('picture', curr.img)
    irs.setAttribute('price', curr.price)

    let cancelBtn = irs.shadowRoot.querySelector('.cancelBtn');
    cancelBtn.setAttribute('onclick', `cancel(${JSON.stringify(curr.product)})`)
    results.appendChild(irs)


    document.getElementById('billing-res').innerHTML += `<div class="billing-card">
    <h1>$${curr.price} per month</h1>
    <p class="bill-type">${curr.product}</p>
    <p>Payment due in 28 days</p>
</div>`



    console.log(irs)
}

console.log(notifs)
for (i in notifs) {
    let curr = notifs[i];

    let ns = document.getElementById("notifs-res");

    let res = document.createElement("div");
    res.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>
    <p id="p1">New Purchase!</p>
    <p>Your OrderID is <span id="oid">${JSON.parse(curr).orderid}</span></p>`
    res.classList.add('ns')

    ns.appendChild(res)
}


function cancel(product) {
    // alert(product)
    let owned = JSON.parse(localStorage.getItem(`${email}Items`));

    owned = owned.filter(function( obj ) {
        return obj.product !== product;
    });
    localStorage.removeItem(`${email}Items`);
    localStorage.setItem(`${email}Items`, JSON.stringify(owned));
    window.location.reload()
}

{/* <div class="ns">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <p id="p1">New Purchase!</p>
                            <p>Your OrderID is <span id="oid">123456</span></p>
                        </div> */}