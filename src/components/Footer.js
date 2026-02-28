export const Footer = (title) => {
  const year = new Date().getFullYear();
  return `
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>${title}</h3>
          <p>Desarrollo web.</p>
        </div>
        <div class="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-copy">
          <p>&copy; ${year} - ACA</p>
        </div>
      </div>
    </footer>
  `;
};
