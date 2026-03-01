import { PublicLayout } from '../layouts/PublicLayout.js';
import { AdminLayout } from '../layouts/AdminLayout.js';

import { HomeController } from '../controllers/HomeController.js';
import { ProductDetailController } from '../controllers/ProductDetailController.js';
import { LoginController } from '../controllers/LoginController.js';
import { AdminProductController } from '../controllers/AdminProductController.js';
import { AdminFormController } from '../controllers/AdminFormController.js';
import { AdminEditController } from '../controllers/AdminEditController.js';
import { CheckoutController } from '../controllers/CheckoutController.js';
import { RegisterController } from '../controllers/RegisterController.js';

export const routes = [
  { path: '#/', layout: PublicLayout, controller: HomeController },
  { path: '#/producto/:id', layout: PublicLayout, controller: ProductDetailController },
  {
    path: '#/login',
    layout: (content) => `<div class="login-layout">${content}</div>`, // Layout simple
    controller: LoginController
  },
  { path: '#/admin', layout: AdminLayout, controller: AdminProductController }, // Dashboard inicial
  { path: '#/admin/productos', layout: AdminLayout, controller: AdminProductController },
  { path: '#/admin/productos/nuevo', layout: AdminLayout, controller: AdminFormController },
  { path: '#/admin/productos/editar/:id', layout: AdminLayout, controller: AdminEditController },
  {
    path: '#/checkout',
    layout: PublicLayout,
    controller: CheckoutController
  },
  {
    path: '#/register',
    layout: PublicLayout,
    controller: RegisterController
  }
];