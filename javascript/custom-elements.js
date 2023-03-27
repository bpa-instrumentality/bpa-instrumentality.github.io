const template = document.createElement("template");
template.innerHTML = `
<style>
.result {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    position: relative;
    background-color: none;
    max-width: 215px;
}
.result img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    position: relative;
}
.result button {
    width: 75px;
    background-color: #DF652B;
    color: white;
    border: none;
    border-radius: 50px;
    height: 30px;
    cursor: pointer;
    margin: 5px 0;
    box-shadow: 0 1px 2px 1px #000 26;
    transition: background-color 0.3s ease;
}
.result button:hover {
    background-color: #a34b21;
}
.result h1 {
    font-size: 1.2rem;
    margin: 0;
}
.result .price {
    margin: 0;
    font-weight: 600;
    color: #DF652B;
}
.result #description {
    font-size: 0.85rem;
    max-width: 100%;
    opacity: 0.7;
    margin: 0;
}

@media (max-width: 563px) {
    .result {
        width: 100% !important;
        max-width: none !important;
    }
    .result img {
        width: 100%;
        height: auto;
    }
}
</style>
<div class="result">
<img src="/assets/images/yetanothertest.jpg" alt="violin">
<button class="addBtn">View</button>
<h1 class="img-title">Eastman Violin</h1>
<p class="price">$<span class="priceAmt"></span>.00</p>
<p class="desc" id="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit beatae rem minima!</p>
<button class="cancelBtn" style="display: none">Cancel</button>
</div>
`

class InstrumentResultCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    static get observedAttributes() {
        return ["title", "picture", "price", "desc", "hide-btn", "cancel-btn"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".img-title").innerText = this.getAttribute("title");

        this.shadowRoot.querySelector("img").src = this.getAttribute("picture");

        this.shadowRoot.querySelector(".priceAmt").innerText = this.getAttribute("price");

        this.shadowRoot.querySelector(".desc").innerText = this.getAttribute("desc");

        if (this.getAttribute("hide-btn") == "true") {
            this.shadowRoot.querySelector(".addBtn").style.display = "none"
        }

        if (this.getAttribute("cancel-btn") == "true") {
            this.shadowRoot.querySelector(".cancelBtn").style.display = "block"
        }
    }
}

window.customElements.define('instrument-result-card', InstrumentResultCard);