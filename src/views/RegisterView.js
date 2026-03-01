export const RegisterView = () => `
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
`;