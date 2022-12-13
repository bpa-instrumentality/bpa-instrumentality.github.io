// Fetching JSON and appending the instrument cards to the "results" section.
fetch("./instruments.json")
    .then((response) => response.json())
    .then(json => {
        let instruments = json.instruments;
        let filter = ""
        // console.log(instruments)

        for (let index = 0; index < filter.toString().length/2; index++) {
            console.log(index)
        }

        for (let i = 0; i < instruments.length; i++) {
        //    instruments.splice(i, 1)
           let currObj = instruments[i];
           if (currObj.filterid.toString().includes(filter.toString())) {
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
        }
    })