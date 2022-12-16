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
        let originalFilter = "118437"
        let filter = originalFilter;
        
    })