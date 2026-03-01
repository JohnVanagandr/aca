const USERS_KEY = 'sena_store_users';

export const UserService = {
  // Obtener todos los usuarios registrados
  getAll: () => {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
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