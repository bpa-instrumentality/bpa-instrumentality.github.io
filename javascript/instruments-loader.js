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
        document.querySelectorAll('.noRes').forEach((i) => {
            i.style.display = "none"
        })
        let instruments = json.instruments;
        const instrumentCatalog = ['violin', 'saxophone', 'trumpet', 'flute', 'drums', 'guitar']
        const costCatalog =  ['c1', 'c2', 'c3', 'c4'];
        const skillCatalog = ['s1', 's2', 's3'];
        const params = new URLSearchParams(window.location.search);
        let instParam = params.get('instruments');
        instParam = JSON.parse(instParam);

        if (instParam == null) {
            instParam = ['violin', 'saxophone', 'trumpet', 'flute', 'drums', 'guitar']
        }
        instParam.forEach((item) => {
            if (!instrumentCatalog.includes(item)) {
                instParam = instrumentCatalog
            }
        })
        for (i in instParam) {
            console.log(document.getElementById(instParam[i]).checked = true)
        }
        let costParam = params.get('costs');
        costParam = JSON.parse(costParam);
        if (costParam == null) {
            costParam = costCatalog
        }
        costParam.forEach((item) => {
            if (!costCatalog.includes(item)) {
                costParam = ['c1', 'c2', 'c3', 'c4']
            }
        })
        for (i in costParam) {
            console.log(document.getElementById(costParam[i]).checked = true)
        }
        let diffParam = params.get('levels');
        diffParam = JSON.parse(diffParam);
        if (diffParam == null) {
            diffParam = ['s1', 's2', 's3']
        }
        diffParam.forEach((item) => {
            if (!skillCatalog.includes(item)) {
                diffParam = skillCatalog
            }
        })
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

        if (sorted.length == 0) {
            
            document.getElementById('noResults').textContent = "Sorry, but we could not find the instruments that you wanted. You might like some of these related instruments though!"
            document.querySelectorAll('.noRes').forEach((i) => {
                i.style.display = "block"
            })
            console.log( document.getElementById('noResults'))
            document.getElementById('raAdd').textContent = " related"
         }
         sorted = sorted1;
        
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
            document.getElementById('results').appendChild(irsCard);
            let cardData = {
                "title": curr.title,
                "img": curr.picture,
                "desc": curr.desc,
                "price": curr.price,
                "id": i
            }
            console.log(cardData)
            let stringified = JSON.stringify(cardData);
            let addBtn = irsCard.shadowRoot.querySelector('button');
            irsCard.id = i


            let session = localStorage.getItem('session')
    if (!session) {
        window.location.replace('login.html')
    }
    session = JSON.parse(session)
    let email = session.email;
    let cart = JSON.parse(localStorage.getItem(email));
    let cartFilter = cart.filter((i) => {
        return i.product == cardData.title;
    })
    console.log(cart, cartFilter)
    if (cartFilter.length > 0) {
        addBtn.textContent = "Added";
        addBtn.disabled = true;
        addBtn.style.cursor = "auto"
        addBtn.style.background = "#a34b21"
        console.log(addBtn)
    }


            addBtn.setAttribute('onclick', `addToCart(${stringified})`);
        }
        if (!document.getElementById('searching').classList.contains('dontHide')) {
            document.getElementById('searching').style.display = "none";
        }
        
    })

function search() {
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
        if (insts.length == 0) {
            insts = null;
        }
        else {
            insts = JSON.stringify(insts)
        }
        if (costs.length == 0) {
            costs = null;
        }
        else {
            costs = JSON.stringify(costs)
        }
        if (skills.length == 0) {
            skills = null;
        }
        else {
            skills = JSON.stringify(skills)
        }
        console.log(insts, costs, skills)
        window.location.replace(`instrumentresults.html?instruments=${insts}&costs=${costs}&levels=${skills}`);
}

function addToCart(data) {
    let currCard = document.getElementById(data.id).shadowRoot;
    let addToCartBtn = currCard.querySelector('button');
    console.log(addToCartBtn)
    console.log(currCard)
    let session = localStorage.getItem('session')
    if (!session) {
        window.location.replace('login.html')
    }
    session = JSON.parse(session)
    let email = session.email;
    let cart = JSON.parse(localStorage.getItem(email));
    let cartFilter = cart.filter((i) => {
        return i.product == data.title;
    })
    console.log(cart, cartFilter)
    if (!(cartFilter.length > 0)) {
        addToCartBtn.textContent = "Added";
        addToCartBtn.disabled = true;
        addToCartBtn.style.cursor = "auto"
        addToCartBtn.style.background = "#a34b21"
        console.log(addToCartBtn)
        let newItem = {
            "product": data.title,
            "price": data.price,
            "img": data.img
        }
        cart.push(newItem);
        console.log(cart)
        localStorage.removeItem(email)
        localStorage.setItem(email, JSON.stringify(cart));
        updateCart()
    }
    else {
        console.log('item in cart!')
    }
}

function resetFilters() {
    let checkboxes = document.querySelectorAll('input')
    checkboxes.forEach((i) => {
        i.checked = false;
    })
}