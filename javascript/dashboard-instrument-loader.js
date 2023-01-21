let session = JSON.parse(localStorage.getItem('session'))
let email = session.email;


let owned = JSON.parse(localStorage.getItem(`${email}Items`));
let results = document.getElementById("isr");
    console.log(owned)
    if (owned.length == 0) {
        results.textContent = "You have not rented any instruments."
        console.log('e')
        document.getElementById('billing-res').textContent = "You do not have any active billing cycles."
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