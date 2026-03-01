import { getCart, getTotalPrice, clearCart } from '../logic/cartLogic.js';
import { AuthService } from '../services/authService.js';
import { CheckoutView } from '../views/CheckoutView.js';

export const CheckoutController = {
  render: () => {
    // 1. Obtenemos los datos (Modelo)
    const items = getCart();
    const total = getTotalPrice();

    // 2. Retornamos la interfaz (Vista) pasándole los datos
    return CheckoutView(items, total);
  },

  init: () => {
    // 3. Manejamos las interacciones (Controlador)
    const btnPay = document.querySelector('#btn-confirm-payment');

    btnPay?.addEventListener('click', () => {

      if (!AuthService.isAuthenticated()) {
        alert("¡Casi listo! Para finalizar el pago, por favor inicia sesión o regístrate.");
        sessionStorage.setItem('redirect_after_login', '#/checkout');
        window.location.hash = '#/login';
        return;
      }

      // Simulación de éxito
      alert("🚀 ¡Pago procesado con éxito! Gracias por tu compra en SENA Store.");
      clearCart();
      window.location.hash = '#/';
    });
  }
};