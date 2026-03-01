export const LoginView = () => `
  <div class="admin-form-container fade-in">
    <div class="form-header">
      <h1>Bienvenido Instructor</h1>
      <p>Ingresa para gestionar la tienda</p>
    </div>
    <form id="login-form" class="admin-form">
      <div class="form-group">
        <label>Correo Electrónico</label>
        <input type="email" name="email" value="admin@sena.edu.co" required>
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" name="password" placeholder="admin123" required>
      </div>
      <button type="submit" class="btn-save">Entrar al Panel</button>
      <p class="form-footer">¿Eres nuevo aprendiz? <a href="#/register">Crea tu cuenta aquí</a></p>
    </form>
  </div>
`;