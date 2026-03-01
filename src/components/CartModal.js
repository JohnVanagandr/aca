export const CartModal = () => {
  return `
  <div id="cart-overlay" class="cart-overlay"></div>
    <div id="cart-modal" class="cart-modal">
      <div class="cart-modal-content">
        <header class="cart-modal-header">
          <h2>Mi Carrito</h2>
          <button id="close-cart" class="close-btn" aria-label="Cerrar">&times;</button>
        </header>

        <div id="cart-items-container" class="cart-items-list">
           </div>

        <footer class="cart-modal-footer">
          <div class="cart-total">
            <span>Total estimado:</span>
            <span id="cart-total">$0</span>
          </div>
          <a href="#/checkout" class="btn-checkout">Continuar al pago</a>
        </footer>
      </div>
    </div>
  `;
};
