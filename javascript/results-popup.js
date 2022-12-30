let popup = document.getElementById('popup');


function closePopup() {
    popup.classList.add('hidden')
}

function openPopup(data) {
    document.getElementById('ipic').src = data.img;
    document.getElementById('rt').textContent = data.title;
    document.getElementById('price-amt').textContent = data.price;
    popup.classList.remove('hidden');
}

function addToCart() {
    let session = localStorage.getItem('session')
    if (!session) {
        window.location.replace('login.html')
    }
    session = JSON.parse(session)
    let email = session.email;
    let cart = JSON.parse(localStorage.getItem(email));
    let cartFilter = cart.filter((i) => {
        return i.product == document.getElementById('rt').textContent;
    })
    console.log(cart, cartFilter)
    if (!(cartFilter.length > 0)) {
        let newItem = {
            "product": document.getElementById('rt').textContent,
            "price": document.getElementById('price-amt').textContent
        }
        cart.push(newItem);
        console.log(cart)
        localStorage.removeItem(email)
        localStorage.setItem(email, JSON.stringify(cart));
    }
    else {
        console.log('item in cart!')
    }
}
