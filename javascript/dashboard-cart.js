let cartItems = localStorage.getItem(JSON.parse(localStorage.getItem('session')).email)
    cartItems = JSON.parse(cartItems)

let amt = cartItems.length;
        if (amt > 5) {
            amt = '5+';
        }
        document.getElementById('amt').textContent = amt;

function toggleCart() {
    document.getElementById('cr').innerHTML = `<div id="no-items"><i class="fa-regular fa-paper-plane"></i> You have no items in the cart!
                        
    <button onclick="window.location.replace('instrumentresults.html')">Purchase Instruments</button></div>`;
    let cartItems = localStorage.getItem(JSON.parse(localStorage.getItem('session')).email)
    cartItems = JSON.parse(cartItems)
    if (cartItems.length > 0) {
        document.getElementById('no-items').style.display = "none"

        for (i in cartItems) {
            let result = document.createElement('div');
            result.classList.add('result');
            let heading = document.createElement('h1')
            heading.textContent = cartItems[i].product;
            result.appendChild(heading);
            let para = document.createElement('p')
            para.textContent = `$${cartItems[i].price} per month`;
            result.appendChild(para);
            
            document.getElementById('cr').appendChild(result)
        }
    } else {
        document.getElementById('checkout').style.display = "none"

    }
    document.getElementById('cartDetails').classList.toggle('fullHeight');
}