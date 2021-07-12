import menu from '../templates/menu.js';

export class Menu extends Quantum {
    #name = this.shadowRoot.querySelector('#name');

    constructor() {
        super();

        this.addEventListener('click', event => {
            event.stopPropagation();
            const method = event.target.getAttribute('invoke');
            if (method in this.parentElement) {
                this.parentElement[method](event);
            }
        });
    }

    static get observedAttributes() { return ['name']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.#name.innerText = currentValue;
    }
}

Menu.define('quantum-menu', menu);