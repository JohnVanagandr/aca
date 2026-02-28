export const CartIcon = (count = 0) => `
  <div class="cart-icon-container">
    <box-icon class="bx bx-md" type='regular' name='cart-alt'></box-icon>
    <span id="cart-count" class="cart-badge">${count}</span>
  </div>
`;
