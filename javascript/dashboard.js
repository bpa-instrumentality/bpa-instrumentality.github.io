let currScreen = "instruments";
document.getElementById(currScreen).classList.add('active-mnp2')

function updateTabs() {
    let currTab = document.querySelector('.shown');
    if (currTab) {
        currTab.classList.remove("shown")
    }
    document.querySelector(`.${currScreen}`).classList.add('shown');
    console.log('hi!');
}

updateTabs();

let tabs = document.querySelectorAll(".tabSelect");
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelector('.active-mnp2').classList.remove('active-mnp2');
        tab.classList.add('active-mnp2');
        currScreen = tab.id;
        updateTabs();
    })
})