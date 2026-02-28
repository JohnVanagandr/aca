export const CartIcon = (count = 0) => `
  <div class="cart-icon-container">
    <span class="cart-icon">🛒</span>
    <span id="cart-count" class="cart-badge">${count}</span>
  </div>
`;
