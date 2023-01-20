let popup = document.getElementById('signup-popup');
let overlay = document.getElementById('popup-overlay');
let popupCloseBtn = document.getElementById('popup-close');

let popup2 = document.getElementById("ifpopup")
let popupClose2 = document.getElementById("popup-close2")
let overlay2 = document.getElementById("o2")

function closePopup2() {
    popup2.style.opacity = "0";
    popup2.style.pointerEvents = "none";
}

closePopup2()


function closePopup(){
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
}

function openPopup2() {
    closePopup();
    popup2.style.opacity = "1";
    popup2.style.pointerEvents = "all";
}

popupCloseBtn.addEventListener("click", () => {
    closePopup()
})

overlay.addEventListener("click", () => {
    closePopup();
})

popupClose2.addEventListener("click", () => {
    closePopup2()
})

overlay2.addEventListener("click", () => {
    closePopup2();
})

if (!localStorage.getItem('session')) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            let myMediaQuery = window.matchMedia('(min-width: 500px)');
            if (myMediaQuery.matches) {
                popup.style.opacity = "1";
                popup.style.pointerEvents = "all";
            }
          }, "12000")
    })
}
