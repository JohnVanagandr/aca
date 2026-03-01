/**
 * Se encarga de inyectar el HTML en un contenedor específico.
 * @param {string} selector - El selector CSS del contenedor (ej. '#app').
 * @param {string} htmlTemplate - El string de HTML a inyectar.
 */
export const render = (selector, htmlTemplate) => {
  const container = document.querySelector(selector);
  if (container) {
    container.innerHTML = htmlTemplate;
  } else {
    console.error(`No se encontró el contenedor: ${selector}`);
  }
};

/**
 * Permite actualizar solo una parte de la pantalla (ej. el total del carrito).
 */
export const updateElement = (selector, htmlTemplate) => {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = htmlTemplate;
  }
};