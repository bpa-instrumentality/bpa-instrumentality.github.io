let popup = document.getElementById('signup-popup');
let overlay = document.getElementById('popup-overlay');
let popupCloseBtn = document.getElementById('popup-close');


function closePopup(){
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
}

popupCloseBtn.addEventListener("click", () => {
    closePopup()
})

overlay.addEventListener("click", () => {
    closePopup();
})

if (!localStorage.getItem('session')) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            let myMediaQuery = window.matchMedia('(min-width: 500px)');
            if (myMediaQuery.matches) {
                popup.style.opacity = "1";
                popup.style.pointerEvents = "all";
            }
          }, "3500")
    })
}
