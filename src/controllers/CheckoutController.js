import { getCart, getTotalPrice, clearCart } from '../logic/cartLogic.js';
import { AuthService } from '../services/authService.js';

export const CheckoutController = {
  render: () => {
    const items = getCart();
    const total = getTotalPrice();

    if (items.length === 0) {
      return `
        <div class="checkout-container fade-in">
          <h2>Tu carrito está triste 🛒</h2>
          <p>No hay productos para procesar. Vuelve a la tienda y elige algo genial.</p>
          <a href="#/" class="btn-save">Volver a la tienda</a>
        </div>
      `;
    }

    return `
      <div class="checkout-container fade-in">
        <h1>Resumen de tu Compra</h1>
        <div class="checkout-grid">
          <div class="checkout-items">
            ${items.map(item => `
              <div class="checkout-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                  <h3>${item.name}</h3>
                  <p>Cantidad: ${item.quantity}</p>
                  <p class="item-subtotal">Subtotal: $${(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="checkout-summary-card">
            <h3>Total a Pagar</h3>
            <div class="total-amount">$${total.toLocaleString()}</div>
            <hr>
            <p class="info-text">Al continuar, confirmas que los productos en la lista son correctos.</p>
            <button id="btn-confirm-payment" class="btn-pay">
              Confirmar y Pagar
            </button>
          </div>
        </div>
      </div>
    `;
  },

  init: () => {
    const btnPay = document.querySelector('#btn-confirm-payment');

    btnPay?.addEventListener('click', () => {
      // VALIDACIÓN DE SESIÓN (Solo clientes o admin autenticados)
      if (!AuthService.isAuthenticated()) {
        alert("¡Casi listo! Para finalizar el pago, por favor inicia sesión o regístrate.");
        // Guardamos la intención de compra para volver aquí después del login
        sessionStorage.setItem('redirect_after_login', '#/checkout');
        window.location.hash = '#/login';
        return;
      }

      // Si tiene sesión, simulamos el éxito del pago
      alert("🚀 ¡Pago procesado con éxito! Gracias por tu compra en SENA Store.");
      clearCart(); // Limpiamos el carrito
      window.location.hash = '#/'; // Volvemos al inicio
    });
  }
};