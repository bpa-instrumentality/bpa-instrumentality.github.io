let session = localStorage.getItem('session');
if (!session) {
    window.location.replace('index.html')
}
session = JSON.parse(session);
let email = session.email
let cart = localStorage.getItem(email);
cart = JSON.parse(cart)
if (cart.length == 0) {
    window.location.replace('instrumentresults.html')
}
console.log(cart)
let total = 0;
let items = document.getElementById('items');
document.getElementById('amtMore').textContent = cart.length - 1;
if (cart.length == 1) {
    document.getElementById('and').style.display = "none"
}
document.getElementById('firstItem').textContent = cart[0].product;
for (i in cart) {
    let curr = cart[i];
    total += curr.price;
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `<div class="left">
    <img src="${curr.img}" alt="intrument">
    <div>
        <h1>${curr.product}</h1>
        <p>Billed Monthly</p>
    </div>
</div>
<div class="right">
    <p class="cost">$${curr.price}.00</p>
</div>`
    items.appendChild(item)

}

console.log(total)
document.querySelectorAll('.total').forEach((i) => {
    i.textContent = total;
})

