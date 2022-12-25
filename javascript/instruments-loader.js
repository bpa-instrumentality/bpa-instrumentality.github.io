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
        let filter = 13;
        // const sorted = [...instruments].sort((a, b) => {
        //     const aValue = getMatchValue(filter, a.filterid)
        //     const bValue = getMatchValue(filter, b.filterid)
        //     return aValue < bValue ? 1 : aValue > bValue ? -1 : 0
        //   })
          
        //   console.log(sorted)
          
        //   function getMatchValue(original, filterid) {
        //     const a = original.toString()
        //     const b = filterid.toString()
          
        //     let sum = 0
          
        //     for (let i = 0; i < a.length; i += 1) {
        //       if (a[i] === b[i]) {
        //         sum += a.length - i
        //       }
        //     }
          
        //     return sum
        //   }

          const options = {
            includeScore: true,
            keys: [{
                name: "nameid",
                weight: 0.7
            },
            {
                name: "filterid",
                weight: 0.3
            },
            {
                name: "priceid",
                weight: 0.1
            }
        ]
          }

          const params = new URLSearchParams(window.location.search)
          let filterParam = params.get('filter');
          
          if (!filterParam) {
            filterParam = "1"
          }

          const fuse = new Fuse(instruments, options)
          const sorted = fuse.search(filterParam)

          console.log('fuse: ', sorted)

        for (i in sorted) {
            let curr = sorted[i].item;
            let irsCard = document.createElement('instrument-result-card');
            irsCard.classList.add('irs')
            irsCard.setAttribute('title', curr.title);
            irsCard.setAttribute('picture', curr.picture);
            let span1 = document.createElement('span')
            span1.setAttribute('slot', "desc");
            span1.textContent = curr.desc;
            irsCard.appendChild(span1)
            let span2 = document.createElement("span");
            span2.setAttribute('slot', "price");
            span2.textContent = curr.price;
            irsCard.appendChild(span2)
            document.getElementById('results').appendChild(irsCard);
        }
        document.getElementById('searching').style.display = "none";
         if ((document.getElementById('results').getElementsByTagName('*').length)<2) {
            document.getElementById('searching').textContent = "Sorry, but we could not find the instruments that you wanted."
            document.getElementById('searching').style.display = "block"
         }
        
    })