let popup = document.getElementById('popup');
let cards = document.querySelectorAll('instrument-result-card')

console.log(cards)

function test() {
    alert('hi!')
}

function closePopup() {
    popup.classList.add('hidden')
}

function openPopup(data) {
    document.getElementById('ipic').src = data.img;
    document.getElementById('rt').textContent = data.title;
    document.getElementById('price-amt').textContent = data.price;
    popup.classList.remove('hidden');
}