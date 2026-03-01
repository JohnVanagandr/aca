import { AuthService } from '../services/authService.js';

export const Header = (cartCount) => {
  const user = AuthService.getUser();
  const isAuth = AuthService.isAuthenticated();

  return `
    <header class="main-header">
      <div class="header-container">
        <a href="#/" class="logo">SENA <span>Store</span></a>

        <nav class="header-nav">
          <div class="cart-icon-container">
            <span id="cart-count">${cartCount}</span>
            🛒
          </div>

          <div class="auth-menu">
            ${isAuth ? `
              <div class="user-profile">
                <span>Hola, <strong>${user.name}</strong></span>
                <div class="dropdown-content">
                  <a href="#/admin/productos">⚙️ Administrar</a>
                  <button id="btn-logout" class="logout-link">Cerrar Sesión</button>
                </div>
              </div>
            ` : `
              <a href="#/login" class="btn-login">Iniciar Sesión</a>
              <a href="#/register" class="btn-register-header">Registrarme</a>
            `}
          </div>
        </nav>
      </div>
    </header>
  `;
};