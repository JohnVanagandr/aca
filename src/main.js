import 'boxicons';
import './style.css';

import { handleRouting } from './router.js';
import { initAppEvents } from './events.js';

import { ProductService } from './services/productService.js';
import { UserService } from './services/userService.js';

const startApp = async () => {
  // Inicializamos las "Bases de Datos"
  UserService.init();
  // 1. Cargamos los datos una sola vez al inicio
  const allProducts = await ProductService.getAll();
  // 2. Función que orquesta el cambio de vista
  const navigate = () => {
    handleRouting(allProducts);
    // Re-vinculamos eventos si el renderizado destruyó nodos previos
    initAppEvents(allProducts);
    // Siempre volver al inicio del scroll al navegar
    window.scrollTo(0, 0);
  };

  // 3. Escuchar el cambio de Hash (Navegación)
  window.addEventListener('hashchange', navigate);

  // 4. Ejecutar la navegación inicial (Carga por primera vez)
  navigate();
};

startApp();