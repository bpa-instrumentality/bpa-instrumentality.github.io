let modal = document.getElementById("modal");


function closeModal() {
    modal.style.pointerEvents = "none";
    modal.style.opacity = "0";
}

function resetBtn() {
    let addBtn = document.getElementById("addButton");
    addBtn.textContent = ""
    addBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to cart`
    addBtn.disabled = false;
    addBtn.style.cursor = "pointer"
    addBtn.style.background = "#DF652B"
}

function openModal(cartData, added) {
    modal.style.pointerEvents = "all";
    modal.style.opacity = "1";
    console.log(added)
    let addBtn = document.getElementById("addButton");
    document.getElementById("modalImg").src = cartData.img;
    document.getElementById("modalTitle").textContent = `${cartData.title} - Premium Quality Instrument`;
    document.getElementById("longDesc").textContent = `${cartData.longDesc}`;
    console.log(cartData.diff)
    if (cartData.diff == "s1") {
        document.getElementById("modal__skill").textContent = "Beginner"
    } else if (cartData.diff == "s2") {
        document.getElementById("modal__skill").textContent = "Intermediate"
    } else {
        document.getElementById("modal__skill").textContent = "Advanced"
    }
    document.getElementById("modalPrice").textContent = `$${cartData.price}.00 per month`;
    addBtn.setAttribute('onclick', `addToCart(${JSON.stringify(cartData)}); closeModal()`);


    let session = localStorage.getItem('session')
    if (!session) {
        window.location.replace('login.html')
    }
    session = JSON.parse(session)
    let email = session.email;
    let cart = JSON.parse(localStorage.getItem(email));
    let cartFilter = cart.filter((i) => {
        return i.product == cartData.title;
    })
    console.log(cartFilter)
    if (!(cartFilter.length == 0)) {
        addBtn.textContent = "Already Added";
        addBtn.disabled = true;
        addBtn.style.cursor = "auto"
        addBtn.style.background = "#a34b21"
    } else {
        resetBtn()
    }
}