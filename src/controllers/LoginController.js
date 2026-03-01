import { AuthService } from '../services/authService.js';

export const LoginController = {
  render: () => `
    <div class="admin-form-container fade-in">
      <div class="form-header">
        <h1>Bienvenido Instructor</h1>
        <p>Ingresa para gestionar la tienda</p>
      </div>
      <form id="login-form" class="admin-form">
        <div class="form-group">
          <label>Correo Electrónico</label>
          <input type="email" name="email" value="instructor@sena.edu.co" required>
        </div>
        <div class="form-group">
          <label>Contraseña</label>
          <input type="password" name="password" placeholder="admin123" required>
        </div>
        <button type="submit" class="btn-save">Entrar al Panel</button>
      </form>
    </div>
  `,
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