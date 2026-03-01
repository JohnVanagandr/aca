import { defineConfig } from 'vite';

export default defineConfig({
  /**
   * EL SECRETO: El 'base' debe coincidir EXACTAMENTE con el nombre 
   * de tu repositorio en GitHub entre barras.
   * Si tu repo es: github.com/tu-usuario/mi-tienda-sena
   * Entonces base es: '/proyecto/'
   */
  base: '/aca/',

  build: {
    outDir: 'dist', // Carpeta donde se genera el código de producción
    assetsDir: 'assets', // Organización de JS/CSS dentro de dist
  },

  server: {
    port: 3000, // Puerto local para que tus aprendices trabajen cómodos
    open: true, // Abre el navegador automáticamente al dar npm run dev
  }
});