function animData() {
    let valueDisplays = document.querySelectorAll(".number");
    let statCards = document.querySelectorAll('.stat');

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-val'));
        let interval = parseInt(valueDisplay.getAttribute('data-duration'));
        let duration = Math.floor(interval / endValue);
        statCards.forEach((statCard) => {
            statCard.style.opacity = '0.6';
            statCard.style.transition = '1s';
        })
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
                statCards.forEach((statCard) => {
                    statCard.style.opacity = '1';
                    statCard.style.transition = '1s';
                })
            }
        },duration);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animData();
        }
    });
});


const numberelems = document.querySelectorAll('.stats__section');
numberelems.forEach((el) => observer.observe(el));