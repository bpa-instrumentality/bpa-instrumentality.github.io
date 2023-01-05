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
        //   let filterParam = params.get('filter');
          
        //   if (!filterParam) {
        //     filterParam = "1"
        //   }

        //   const fuse = new Fuse(instruments, options)
        //   const sorted = fuse.search(filterParam)

        //   console.log('fuse: ', sorted)

        let instParam = params.get('instruments');
        instParam = JSON.parse(instParam);
        if (instParam == null) {
            instParam = ['violin', 'saxophone', 'trumpet', 'flute', 'drums', 'guitar']
        }
        for (i in instParam) {
            console.log(document.getElementById(instParam[i]).checked = true)
        }
        let costParam = params.get('costs');
        costParam = JSON.parse(costParam);
        if (costParam == null) {
            costParam = ['c1', 'c2', 'c3', 'c4']
        }
        for (i in costParam) {
            console.log(document.getElementById(costParam[i]).checked = true)
        }
        let diffParam = params.get('levels');
        diffParam = JSON.parse(diffParam);
        if (diffParam == null) {
            diffParam = ['s1', 's2', 's3']
        }
        for (i in diffParam) {
            console.log(document.getElementById(diffParam[i]).checked = true)
        }
        // console.log(instParam, costParam, diffParam)
        let sorted1 = instruments.filter((i) => {
            return instParam.includes(i.instrument)
        })
        console.log(sorted1)
        let sorted2 = sorted1.filter((i) => {
            return costParam.includes(i.cost)
        })
        console.log(sorted2)
        let sorted = sorted2.filter((i) => {
            return diffParam.includes(i.diff)
        })
        console.log(sorted)
        
        let checkboxes = document.querySelectorAll('input');
        let insts = [];
        let costs = [];
        let skills = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked == true) {
                console.log(checkbox)
                let testClass = checkbox.className;
                console.log(testClass)

                switch(testClass) {
                    case "inst":
                        insts.push(checkbox.value)
                        break
                    case "cost":
                        costs.push(checkbox.value)
                        break
                    case "skill":
                        skills.push(checkbox.value)
                        break
                }
            }
        })
        console.log(insts, costs, skills)
        // let ooga = JSON.stringify(['hi!', 'bye!']);
        // console.log(`http://127.0.0.1:5500/instrumentresults.html?instruments=[%22violin%22,%20%22guitar%22]&cost=[%22c4%22,%20%22c1%22]&levels=[%22s3%22]`)
        
          document.getElementById('resultsAmt').textContent = sorted.length;


        for (i in sorted) {
            let curr = sorted[i];
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
            irsCard.setAttribute("price", curr.price)
            span2.textContent = curr.price;
            irsCard.setAttribute("desc", curr.desc)
            // irsCard.appendChild(span2)
            let cardData = {
                "title": curr.title,
                "img": curr.picture,
                "desc": curr.desc,
                "price": curr.price
            }
            let stringified = JSON.stringify(cardData);
            irsCard.setAttribute('onclick', `openPopup(${stringified})`);
            document.getElementById('results').appendChild(irsCard);
        }
        document.getElementById('searching').style.display = "none";
         if ((document.getElementById('results').getElementsByTagName('*').length)<2) {
            document.getElementById('searching').textContent = "Sorry, but we could not find the instruments that you wanted."
            document.getElementById('searching').style.display = "block"
         }
        
    })