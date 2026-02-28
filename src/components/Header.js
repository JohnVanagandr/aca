import { CartIcon } from "./Cart.js";

export const Header = (cartCount = 0) => {
  return `
    <header class="main-header">
      <div class="header-container">
        <div class="logo">
          <h1>ACA</h1>
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
          </ul>
        </nav>
        <div id="cart-wrapper">
          ${CartIcon(cartCount)}
        </div>
      </div>
    </header>
  `;
};
