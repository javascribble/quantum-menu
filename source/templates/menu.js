export default `
<style>
    :host {
        position: relative;
        display: inline-block;
    }

    :host(:hover) slot {
        display: block;
    }

    slot {
        display: none;
        position: absolute;
        box-shadow: 2px 3px 4px -1px grey;
        z-index: 1;
    }
</style>
<div id="name"></div>
<slot></slot>
`;