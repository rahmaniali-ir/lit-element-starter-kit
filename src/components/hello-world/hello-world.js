import { LitElement, html } from "lit-element"
import { classMap } from "lit-html/directives/class-map"

import styles from "./hello-world.styles"
import registerPropertySupport from "./registered-properties"
import SVG from "../svg"

class helloWorld extends LitElement {
  static get properties() {
    return {
      // property: { type: Number },
    }
  }

  static get styles() {
    return [styles]
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="hello-world">
        <div class="icon">
          <svg><use href="#icon-hello" /></svg>
        </div>
        <span>Hello World!</span>
      </div>

      ${SVG}
    `
  }
}

customElements.define("hello-world", helloWorld)
