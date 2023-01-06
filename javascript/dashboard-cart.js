function updateCart() {
    let cartItems = localStorage.getItem(JSON.parse(localStorage.getItem('session')).email)
    cartItems = JSON.parse(cartItems)
    
    let amt = cartItems.length;
    let oAmt = amt

    if (amt > 5) {
        amt = '5+';
    }
    document.getElementById('amt').textContent = amt;
}
updateCart()
console.log('done1')