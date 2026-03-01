import { LoginView } from '../views/LoginView.js';
import { AuthService } from '../services/authService.js';

export const LoginController = {
  // 1. Delegamos el diseño a la Vista
  render: () => {
    return LoginView();
  },
  
  init: () => {
    const form = document.querySelector('#login-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const result = AuthService.login(data.email, data.password);

      if (result.success) {
        const user = AuthService.getUser();

        // Escenario A: Es un Administrador
        if (user.role === 'admin') {
          console.log("Bienvenido, jefe. Redirigiendo al panel...");
          window.location.hash = '#/admin/productos';
        }

        // Escenario B: Es un Cliente
        else if (user.role === 'client') {
          const pendingRoute = sessionStorage.getItem('redirect_after_login');

          if (pendingRoute) {
            console.log("Cliente autenticado. Retomando proceso de pago...");
            sessionStorage.removeItem('redirect_after_login');
            window.location.hash = pendingRoute;
          } else {
            console.log("Cliente autenticado. Redirigiendo a la tienda...");
            window.location.hash = '#/';
          }
        }
      }
    });
  }
};