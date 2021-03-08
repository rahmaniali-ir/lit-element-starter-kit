import { css } from "lit-element"

export default css`
  :host {
    --hello-world-icon: 32px;
  }

  :host > svg {
    display: none;
  }

  .hello-world {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .icon {
    color: #707372;
    display: block;
    height: var(--hello-world-icon, 32px);
    width: var(--hello-world-icon, 32px);
  }

  .icon > svg {
    display: block;
    fill: currentColor;
    height: 100%;
    width: 100%;
  }
`
