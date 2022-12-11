const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/assets/styles/instrumentresults.css">
<div class="card" part="card">
<div class="overlay" part="overlay"></div>
    <div class="img">
        <img part="img"/>
    </div>
    <div class="card-text" part="card-text">
    <h1 class="img-title" part="img-title"></h1>
    <p class="img-desc" part="img-desc"><slot name="desc"></slot></p>
    <p class="img-price" part="img-price">$<slot name="price"></slot> per month</p>
</div>
</div>
`

class InstrumentResultCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    static get observedAttributes() {
        return ["title", "picture"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".img-title").innerText = this.getAttribute("title");

        this.shadowRoot.querySelector(".img img").src = this.getAttribute("picture");
    }
}

window.customElements.define('instrument-result-card', InstrumentResultCard);