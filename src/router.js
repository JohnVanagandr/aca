import { routes } from './routes/routes.js';
import { render } from './ui/renderer.js';
import { AuthService } from './services/authService.js';

/**
 * Compara la URL actual con el patrón de la ruta y extrae los parámetros (:id)
 */
const matchRoute = (routePath, currentHash) => {
  const pathParts = routePath.split('/');
  const hashParts = currentHash.split('/');

  if (pathParts.length !== hashParts.length) return null;

  const params = {};
  const isMatch = pathParts.every((part, i) => {
    if (part.startsWith(':')) {
      params[part.substring(1)] = hashParts[i];
      return true;
    }
    return part === hashParts[i];
  });

  return isMatch ? params : null;
};

export const handleRouting = (allProducts) => {
  const currentHash = window.location.hash || '#/';
  let matchedRoute = null;
  let params = {};

  // 1. Buscamos la coincidencia en el array de rutas
  for (const route of routes) {
    const match = matchRoute(route.path, currentHash);
    if (match) {
      matchedRoute = route;
      params = match;
      break;
    }
  }

  if (matchedRoute) {
    // 2. SEGURIDAD: ¿Es una ruta de administrador?
    if (currentHash.startsWith('#/admin') && !AuthService.isAuthenticated()) {
      window.location.hash = '#/login';
      return;
    }

    // 3. Renderizado
    const viewContent = matchedRoute.controller.render(allProducts, params);
    render('#app', matchedRoute.layout(viewContent));

    // 4. Inicialización de la lógica del controlador
    if (matchedRoute.controller.init) {
      matchedRoute.controller.init(allProducts, params);
    }
  } else {
    render('#app', '<h1>404 - No encontrado</h1>');
  }
};