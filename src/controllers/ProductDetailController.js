// src/controllers/ProductDetailController.js
import { ProductDetail } from '../components/ProductDetail.js';

export const ProductDetailController = {
  render: (allProducts, params) => {
    const product = allProducts.find(p => p.id == params.id);
    return ProductDetail(product);
  },
  init: (allProducts, params) => {
    // Aquí podrías agregar lógica para "Productos relacionados" 
    // o un contador de tiempo para una oferta.
    console.log(`Viendo el detalle del producto: ${params.id}`);
  }
};