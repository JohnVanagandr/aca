import { UserService } from '../services/userService.js';
import { AuthService } from '../services/authService.js';

export const RegisterController = {
  render: () => `
    <div class="auth-container fade-in">
      <div class="auth-box">
        <h1>Crear Perfil de Aprendiz</h1>
        <p>Regístrate para gestionar tus compras en la tienda SENA</p>
        
        <form id="register-form" class="auth-form">
          <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" name="name" placeholder="Ej. Carlos Alarcón" required>
          </div>
          
          <div class="form-group">
            <label>Correo Institucional o Personal</label>
            <input type="email" name="email" placeholder="aprendiz@correo.com" required>
          </div>
          
          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" name="password" placeholder="Mínimo 6 caracteres" required>
          </div>

          <button type="submit" class="btn-primary-auth">Completar Registro</button>
        </form>
        
        <p class="auth-footer">¿Ya tienes cuenta? <a href="#/login">Inicia Sesión</a></p>
      </div>
    </div>
  `,

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