function appendCard(currObj) {
    let instCard = document.createElement('instrument-result-card');
    instCard.classList.add('irs');
    instCard.setAttribute("picture", currObj.picture);
    instCard.setAttribute("title", currObj.title);
    let desc = document.createElement("span");
    desc.setAttribute("slot", "desc");
    desc.textContent = currObj.desc;
    let price = document.createElement("span");
    price.textContent = currObj.price;
    price.setAttribute("slot", "price");
    instCard.appendChild(desc);
    instCard.appendChild(price);
    document.querySelector('.results').appendChild(instCard)
}

function test() {
    console.log('hi')
}


// Fetching JSON and appending the instrument cards to the "results" section.
fetch("./instruments.json")
    .then((response) => response.json())
    .then(json => {
        let instruments = json.instruments;
        let originalFilter = "118437";
        let filter = originalFilter;
        let newArr = []
        instruments.sort((a, b) => a.filterid - b.filterid)
        console.log(instruments)
        instruments.sort((a, b) => {
            if (b.filterid.toString().includes(filter)) {
                return 1
            }
            else {
                return -1
            }
        })
        console.log(instruments)
    })