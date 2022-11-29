let currentPage = 1;

let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let btns = document.querySelectorAll('.btn');


page1.style.display = "flex";
page2.style.display = "none";
page3.style.display = "none";
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent === "Go Back") {
            if (!(currentPage < 2)) {
                document.getElementById('page'+ currentPage).style.display = "none";
                currentPage -= 1;
                document.getElementById('page'+ currentPage).style.display = "flex";
            }
            else {
                btn.disabled = "true";
            }
        } else {
            if (!(currentPage > 2)) {
                document.getElementById('page'+ currentPage).style.display = "none";
                currentPage += 1;
                document.getElementById('page'+ currentPage).style.display = "flex";
            } else {
                btn.disabled = "true";
            }
        }
    })
})
