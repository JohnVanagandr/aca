import { UserService } from './userService.js';
const AUTH_KEY = 'sena_auth_user';

export const AuthService = {
  // Simulación de login
  login: (email, password) => {
    // 1. Simulación de ADMINISTRADOR
    if (email === 'admin@sena.edu.co' && password === 'admin123') {
      const user = { name: 'Admin SENA', role: 'admin', email };
      localStorage.setItem('sena_auth_user', JSON.stringify(user));
      return { success: true, user };
    }

    // 2. Simulación de CLIENTE
    if (email === 'aprendiz@gmail.com' && password === 'sena2026') {
      const user = { name: 'Aprendiz Juan', role: 'client', email };
      localStorage.setItem('sena_auth_user', JSON.stringify(user));
      return { success: true, user };
    }

    // 3. UNIFICACIÓN: Validar contra nuestra "Base de Datos" de clientes
    const users = UserService.getAll();
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(foundUser));
      return { success: true, user: foundUser };
    }

    return { success: false, message: 'Credenciales inválidas' };
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
    window.location.hash = '#/'; // Al salir, volvemos a la tienda
    window.location.reload(); // Recargamos para limpiar el estado
  },

  isAuthenticated: () => {
    return localStorage.getItem(AUTH_KEY) !== null;
  },

  getUser: () => {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
  }
};