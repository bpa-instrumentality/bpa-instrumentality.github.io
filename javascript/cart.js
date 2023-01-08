let detail = localStorage.getItem('session');

if (!detail) {
    window.location.replace('login.html')
}
detail = JSON.parse(detail)
document.getElementById('email').textContent = detail.email

let cartItems = localStorage.getItem(JSON.parse(localStorage.getItem('session')).email)
    cartItems = JSON.parse(cartItems)
    
    let amt = cartItems.length;
    let oAmt = amt

if (oAmt == 0) {
    document.getElementById('col2').style.display = "none";
    document.getElementById('cartItems').innerHTML = "<p style='margin-bottom: 20px;'>You dont have any items in your cart! Try adding some instruments to your cart first.</p><a href='instrumentresults.html'>View Instruments</a>"
}

let amts = document.querySelectorAll('.cartAmt');
amts.forEach((amtVal) => {
    amtVal.textContent = oAmt
})


let list = document.getElementById('cartItems');
for (i in cartItems) {
    let curr = cartItems[i]
    let cItem = document.createElement('div');
    cItem.classList.add('cart-item');
    let pic = document.createElement('img');
    pic.setAttribute('alt', 'instrument')
    pic.src = curr.img;
    cItem.appendChild(pic)
    let cartDetails = document.createElement('div');
    cartDetails.classList.add('cartDetails');

    let ch = document.createElement('div');
    ch.classList.add('ch');
    ch.innerHTML = `<span class="header">
    <h1>${curr.product}</h1>

    <p>In Stock</p></span>

    <p class="price">$<span class="priceAmt">${parseInt(curr.price)}</span></p>`;
    cartDetails.appendChild(ch);
    let cw = document.createElement('div');
    cw.classList.add('cw');
    cw.innerHTML = `<p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button class="delBtn">Delete</button>`;
    let delBtn = cw.querySelector('button');
    delBtn.setAttribute('onclick', `deleteItem(
        "${curr.product}")`);
    cartDetails.appendChild(cw)
    cItem.appendChild(cartDetails)
    list.appendChild(cItem)
    let divider = document.createElement('div')
    divider.classList.add('divider');
    list.appendChild(divider)
}

let total = 0
document.querySelectorAll('.priceAmt').forEach((priceAmt) => {
    total += parseInt(priceAmt.textContent);
})

console.log(total)

document.getElementById('totalPrice').textContent = total;



function updateCart2() {
    let cartItems = localStorage.getItem(JSON.parse(localStorage.getItem('session')).email)
    cartItems = JSON.parse(cartItems)
    
    let amt = cartItems.length;
    let oAmt = amt

    if (amt > 5) {
        amt = '5+';
    }
    document.getElementById('amt').textContent = amt;
}

function deleteItem(product) {
    let currCart = cartItems;
    let productID = currCart.findIndex(x => x.product === product);
    console.log(productID)
    let newCart = [];
    for (i in currCart) {
        if (i == productID) {
            
        } else {
            newCart.push(currCart[i])
        }
    }
    console.log(newCart)
    localStorage.removeItem(email.textContent);
    localStorage.setItem(email.textContent, JSON.stringify(newCart))
    window.location.reload();
}