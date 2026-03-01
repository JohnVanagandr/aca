import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { CartModal } from '../components/CartModal.js';
import { ScrollTop } from '../components/ScrollTop.js';
import { getCartCount } from '../logic/cartLogic.js';

/**
 * Define la estructura para el usuario final.
 * @param {string} viewContent - El HTML específico de la página (Home, Detalle, etc.)
 */
export const PublicLayout = (viewContent) => {
  return `
    ${Header(getCartCount())}
    <div id="public-container" class="fade-in">
      ${viewContent}
    </div>
    ${Footer("ACA")}
    ${CartModal()}
    ${ScrollTop()}
  `;
};