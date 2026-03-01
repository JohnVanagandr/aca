const USERS_KEY = 'sena_store_users';

export const UserService = {
  /**
   * Inicializa la "Base de Datos" de usuarios si está vacía.
   */
  init: () => {
    if (!localStorage.getItem(USERS_KEY)) {
      const defaultUsers = [
        {
          id: 1,
          name: 'Administrador',
          email: 'admin@sena.edu.co',
          password: 'admin123',
          role: 'admin'
        },
        {
          id: 2,
          name: 'Aprendiz Prueba',
          email: 'aprendiz@gmail.com',
          password: 'sena2026',
          role: 'client'
        }
      ];
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
  },
  // Obtener todos los usuarios registrados
  getAll: () => {
    UserService.init(); // Garantizamos que el storage siempre exista
    return JSON.parse(localStorage.getItem(USERS_KEY));
  },

  // Registrar un nuevo usuario
  register: (userData) => {
    const users = UserService.getAll();

    // Verificar si el correo ya existe
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: 'El correo ya está registrado.' };
    }

    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      id: Date.now(),
      role: 'client'
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, user: newUser };
  }
};