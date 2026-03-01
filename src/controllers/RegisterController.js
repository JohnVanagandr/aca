import { RegisterView } from '../views/RegisterView.js';
import { UserService } from '../services/userService.js';
import { AuthService } from '../services/authService.js';

export const RegisterController = {
  // 1. Renderiza la interfaz pura
  render: () => {
    return RegisterView();
  },
  // 2. Controla la lógica y los eventos
  init: () => {
    const form = document.querySelector('#register-form');

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const userData = Object.fromEntries(formData);

      // 1. Intentamos registrar en nuestra "DB" de LocalStorage
      const result = UserService.register(userData);

      if (result.success) {
        // 1. EL AUTO-LOGIN: Usamos las credenciales recién creadas
        // Esto crea la "sesión activa" en el sistema
        AuthService.login(userData.email, userData.password);

        // Opcional: Feedback visual rápido
        alert(`¡Cuenta creada con éxito! Bienvenido a SENA Store, ${userData.name}.`);

        // 2. LA REDIRECCIÓN INTELIGENTE
        // Verificamos si el usuario fue interrumpido mientras intentaba pagar
        const pendingRoute = sessionStorage.getItem('redirect_after_login');

        if (pendingRoute) {
          // Limpiamos la memoria y lo devolvemos al carrito/pago
          sessionStorage.removeItem('redirect_after_login');
          window.location.hash = pendingRoute;
        } else {
          // Si entró a registrarse por su cuenta, lo mandamos a la tienda
          window.location.hash = '#/';
        }
      } else {
        // Si el correo ya existía, mostramos el error
        alert(result.message);
      }
    });
  }
};